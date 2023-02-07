import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, Pressable, TextInput } from "react-native";
import { Text, View } from "react-native";
import { db } from "./config";

const DetailPayment = (props) => {
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const statusMember = true;
  const paket = props.route.params.paket;
  const harga = props.route.params.harga;
  const metode = props.route.params.metode;
  const [nomor, setNomor] = useState("");

  const insertMember = () => {
    if (nomor.length == 0) {
      Alert.alert("Harap isi nomor dengan benar!!");
    } else {
      setDoc(doc(db, "users", username), {
        username: username,
        email: email,
        password: password,
        paket: paket,
        harga: harga,
        metode: metode,
        nomor: nomor,
        statusMember: statusMember,
      })
        .then(() => {
          console.log("Nomor Submitted");
          Alert.alert("Pembayaran Berhasil!");
          props.navigation.navigate("Home", {
            username: username,
            email: email,
            password: password,
            statusMember: statusMember,
            paket: paket,
            harga: harga,
            metode: metode,
            nomor: nomor,
          });
        })
        .catch((error) => {
          Alert.alert("Pembayaran Gagal!");
          console.log(error);
        });
    }
  };

  return (
    <View style={{ backgroundColor: "black", flex: 1, padding: 20 }}>
      <Text style={{ color: "white" }}>Masukkan Nomor {password} : </Text>
      <View>
        <TextInput
          placeholder="Nomor Anda"
          placeholderTextColor="#aaaaaa"
          style={{
            width: "100%",
            height: 48,
            borderRadius: 5,
            overflow: "hidden",
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 16,
            flexDirection: "row",
          }}
          onChangeText={(nomor) => setNomor(nomor)}
        />
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "white",
            marginTop: 10,
            borderRadius: 10,
          }}
          onPress={insertMember}
        >
          <Text>Konfirmasi</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailPayment;

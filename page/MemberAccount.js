import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  ScrollView,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import {
  doc,
  setDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  collection,
  where,
  deleteField,
} from "firebase/firestore";
import { db } from "./config";
import { firebase } from "./fetch";

const MemberAccount = (props) => {
  const username = props.route.params.username;
  console.log(props);

  const [paket, setPaket] = useState("");
  const [metode, setMetode] = useState("");
  const [nomor, setNomor] = useState("");
  const nomorDB = nomor;

  getDocs(
    query(collection(db, "users"), where("username", "==", username))
  ).then((docSnap) => {
    let users = [];
    docSnap.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    setPaket(users[0].paket);
    setMetode(users[0].metode);
    setNomor(users[0].nomor);
  });

  const updateNomor = () => {
    updateDoc(doc(db, "users", username), {
      nomor: nomor,
    })
      .then(() => {
        console.log("data submitted");
        Alert.alert("Update Berhasil!");
        props.navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Update Gagal!");
        console.log(error);
      });
  };

  const deleteLangganan = () => {
    updateDoc(doc(db, "users", username), {
      statusMember: false,
      harga: deleteField(),
      metode: deleteField(),
      nomor: deleteField(),
      paket: deleteField(),
    })
      .then(() => {
        console.log("Langganan dihapus");
        Alert.alert("Langganan Berhasil Dihapus!");
        props.navigation.navigate("Home", {
          statusMember: false,
        });
      })
      .catch((error) => {
        Alert.alert("Update Gagal!");
        console.log(error);
      });
  };

  return (
    <ScrollView backgroundColor="black">
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ color: "white", paddingBottom: 20 }}>
          Paket anda saat ini
        </Text>
        <View style={styles.card}>
          <Text style={{ color: "white" }}>{paket}</Text>
        </View>
        <Text style={{ color: "white", paddingBottom: 20 }}>
          Metode Pembayaran
        </Text>
        <View style={styles.card}>
          <Text style={{ color: "white" }}>{metode}</Text>
        </View>
        <Text style={{ color: "white", paddingBottom: 20 }}>
          Nomor {metode}
        </Text>
        <View style={styles.card}>
          <Text style={{ color: "white" }}>{nomorDB}</Text>
        </View>
        <Text style={{ color: "white", paddingBottom: 20 }}>
          Nomor {metode} Baru
        </Text>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Nomor baru"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(nomor) => setNomor(nomor)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Pressable style={styles.button} onPress={updateNomor}>
            <Text style={{ color: "white" }}>Save</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={deleteLangganan}>
            <Text style={{ color: "white" }}>Delete</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default MemberAccount;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  card: {
    backgroundColor: "#D6540B",
    width: "80%",
    padding: 30,
    marginBottom: 30,
    alignItems: "center",
    borderRadius: 15,
  },
  textInput: {
    height: 50,
    color: "black",
    fontSize: 20,
    flex: 1,
  },
  inputStyle: {
    width: "80%",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
    flexDirection: "row",
  },
  button: {
    margin: 10,
    width: 100,
    padding: 20,
    backgroundColor: "orange",
    borderRadius: 30,
    alignItems: "center",
  },
});

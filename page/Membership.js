import React, { useState, useEffect } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

const Membership = (props) => {
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const statusMember = props.route.params.statusMember;
  console.log(props);
  const [dataPaket, setDataPaket] = useState([
    {
      paket: "Paket 1 Hari",
      harga: "Rp. 5,000",
    },
    {
      paket: "Paket 1 Bulan",
      harga: "Rp. 50,000",
    },
    {
      paket: "Paket 1 Tahun",
      harga: "Rp. 240,000",
    },
  ]);
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 30, backgroundColor: "black", flex: 1 }}
    >
      <FlatList
        data={dataPaket}
        vertical
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ color: "white" }}>{item.paket}</Text>
            <Text style={{ color: "white" }}>{item.harga}</Text>
            <Pressable
              style={{
                padding: 10,
                width: "90%",
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
              onPress={() =>
                props.navigation.navigate("Payment", {
                  username: username,
                  email: email,
                  password: password,
                  statusMember: statusMember,
                  paket: item.paket,
                  harga: item.harga,
                })
              }
            >
              <Text style={{ textAlign: "center" }}>Langganan</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Membership;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D6540B",
    width: "100%",
    padding: 20,
    marginTop: 45,
    alignItems: "center",
    borderRadius: 15,
  },
});

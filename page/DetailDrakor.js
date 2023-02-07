import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

export default function DetailDrakor(props) {    
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const statusMember = props.route.params.statusMember;
  console.log(statusMember, username, email, password);

  useEffect(() => {
    if (!statusMember) {
      setTimeout(() => {
        props.navigation.navigate("Membership", {
            username: username,
            email: email,
            password: password,
            statusMember: statusMember,
          });
      }, 1000);
    }
  });

  return (
    <NativeBaseProvider>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.container_box}>
          <Pressable
            style={styles.tombol}
            onPress={() =>
              props.navigation.navigate("EditProfile", {
                username: username,
                email: email,
                password: password,
                statusMember: statusMember,
              })
            }
          >
            <View>
            <Text style={{ color: "white", fontSize: 15, margin: 20, alignItems: "center"}}>Anda Belum Berlangganan, Silahkan Beli Paket Yang Tersedia Untuk Dapat Menonton Drama Korea VIP</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </NativeBaseProvider>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    container_box: {
      flex: 1,
      justifyContent: "center",
      padding: 35,
      marginBottom: 20,
      backgroundColor: "black",
    },
    header: {
      paddingBottom: 10,
      width: "100%",
      alignItems: "center",
      backgroundColor: "#D6540B",
    },
    tombol: {
      marginBottom: 30,
      backgroundColor: "#D6540B",
      paddingVertical: 20,
      borderRadius: 30,
      alignItems: "center",
    },
  });

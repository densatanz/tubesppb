import { Button, StyleSheet, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Stack,
  Text,
  View,
  Container,
  Heading,
  Center,
  StatusBar,
  NativeBaseProvider,
  extendTheme,
  Image,
} from "native-base";

{
  /* <Text fontFamily="body" fontWeight="600" fontSize="24">
                Home Panel
              </Text> */
}
const Account = (props, navigation) => {
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const statusMember = props.route.params.statusMember;
  const paket = props.route.params.paket;
  const metode = props.route.params.metode;
  const nomor = props.route.params.nomor;
  console.log(props);

  const checkMember = () => {
    if (!statusMember) {
      props.navigation.navigate("Membership", {
        username: username,
        email: email,
        password: password,
        statusMember: statusMember,
      });
    } else {
      props.navigation.navigate("MemberAccount", {
        username: username,
        email: email,
        paket: paket,
        metode: metode,
        nomor: nomor,
      });
    }
  };

  return (
    <NativeBaseProvider>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            fontFamily="body"
            fontWeight="600"
            fontSize="24"
            color={"white"}
          >
            Profile
          </Text>
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
            <Text style={{ color: "white", fontSize: 18 }}>EDIT PROFILE</Text>
          </Pressable>
          <Pressable style={styles.tombol} onPress={checkMember}>
            <Text style={{ color: "white", fontSize: 18 }}>MEMBERSHIP</Text>
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
export default Account;

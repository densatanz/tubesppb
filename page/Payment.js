import { ScrollView, View, StyleSheet, Text, Pressable } from "react-native";

const Payment = (props) => {
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const statusMember = props.route.params.statusMember;
  const paket = props.route.params.paket;
  const harga = props.route.params.harga;
  console.log(props);
  return (
    <ScrollView backgroundColor="black">
      <View
        style={{ paddingVertical: 20, marginTop: 10, alignItems: "center" }}
      >
        <Text style={styles.text}>Pilihan paket anda</Text>
        <View style={styles.card}>
          <Text style={styles.text}>{paket}</Text>
          <Text style={styles.text}>{harga}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 50, alignItems: "center" }}>
        <Text style={styles.text}>Pilih metode pembayaran</Text>
        <View style={styles.pilihan}>
          <Text style={styles.text}>Link Aja</Text>
          <Pressable
            style={{
              padding: 10,
              width: "20%",
              backgroundColor: "white",
              marginTop: 10,
              borderRadius: 10,
            }}
            onPress={() =>
              props.navigation.navigate("Detail Payment", {
                username: username,
                email: email,
                password: password,
                statusMember: statusMember,
                paket: paket,
                harga: harga,
                metode: "Link Aja",
              })
            }
          >
            <Text style={{ textAlign: "center" }}>Pilih</Text>
          </Pressable>
        </View>
        <View style={styles.pilihan}>
          <Text style={styles.text}>Go-Pay</Text>
          <Pressable
            style={{
              padding: 10,
              width: "20%",
              backgroundColor: "white",
              marginTop: 10,
              borderRadius: 10,
            }}
            onPress={() =>
              props.navigation.navigate("Detail Payment", {
                username: username,
                email: email,
                password: password,
                statusMember: statusMember,
                paket: paket,
                harga: harga,
                metode: "Go-Pay",
              })
            }
          >
            <Text style={{ textAlign: "center" }}>Pilih</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D6540B",
    width: "80%",
    padding: 20,
    marginTop: 25,
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: "white",
  },
  pilihan: {
    backgroundColor: "#D6540B",
    width: "100%",
    padding: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

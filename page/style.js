import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 180,
    marginTop: 100,
    marginBottom: 20,
    justifyContent: "center",
  },
  viewStyle: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
  inputStyle: {
    width: "100%",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",

    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
    flexDirection: "row",
  },
  textInput: {
    height: 50,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    fontSize: 20,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 150,
    borderRadius: 10,
    backgroundColor: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#D6540B",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "80%",
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: "#DCDCDC",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
  },
  akun: {
    height: 20,
    width: 20,
    marginTop: 15,
    marginRight: 15,
  },
  password: {
    height: 20,
    width: 20,
    marginTop: 15,
    marginRight: 15,
  },
});

export default styles;

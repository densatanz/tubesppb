import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 180,
    marginBottom: 10,
    justifyContent: "center",
  },
  viewStyle: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
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
  oldStyle: {
    width: "100%",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
    justifyContent:"center"
  },
  textInput: {
    height: 50,
    color: "black",
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
  },
  textButton: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  loginButtonSection: {
    width: "100%",
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: "#DBA39A",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "#D6540B",
    color: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 5,
    marginTop: 30,
  },
});

export default styles;

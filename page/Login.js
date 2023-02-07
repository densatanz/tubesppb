import React, { Component } from "react";
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { getDocs, collection, doc, where, query } from "firebase/firestore";
import styles from "./style.js";
import { db } from "./config";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      dbemail: "",
      dbpassword: "",
      statusMember:null,
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  getUser = () => {
    var email = this.state.email;
    var password = this.state.password;
    if (email.length == 0 || password.length == 0) {
      alert("Harap isi data dengan benar!!");
    } else {
      getDocs(query(collection(db, "users"), where("email", "==", email))).then(
        (docSnap) => {
          let users = [];
          docSnap.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
          this.setState({
            dbemail: users[0].email,
            dbpassword: users[0].password,
          });
          if (
            this.state.email === this.state.dbemail &&
            this.state.password === this.state.dbpassword
          ) {
            Alert.alert("Berhasil");
            this.props.navigation.navigate("BottomNavigator", {
              username: users[0].username,
              email: users[0].email,
              password:users[0].password,
              statusMember: users[0].statusMember,
            });
            console.log(
              "Documen Data: ",
              users[0].username,
              users[0].email,
              users[0].password,
              users[0].statusMember
            );
          } else {
            Alert.alert("Login Gagal");
          }
        }
      );
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <ScrollView backgroundColor="black">
        <View style={styles.viewStyle}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Image
              style={styles.akun}
              source={require("../assets/akunlogo.png")}
            />
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#aaaaaa"
              style={styles.textInput}
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Image
              style={styles.password}
              source={require("../assets/passlogo.png")}
            />
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              placeholderTextColor="#aaaaaa"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          {/* Button */}

          <View style={styles.loginButtonSection}>
            <Pressable
              style={styles.loginButton}
              onPress={() => {
                this.getUser();
              }}
            >
              <Text style={styles.text}>SIGN IN</Text>
            </Pressable>
          </View>
          <View style={styles.loginButtonSection}>
            <Pressable
              style={styles.loginButton}
              onPress={() => {
                this.props.navigation.navigate("Register");
              }}
            >
              <Text style={styles.text}>SIGN UP</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    );
  }
}

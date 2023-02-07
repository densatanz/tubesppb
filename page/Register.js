import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { setDoc, doc } from "firebase/firestore";
import styles from "./stylereg";
import { db } from "./config";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      confirmPw: "",
      statusMember: false,
      check_textInputChange: false,
      confirmSecureTextEntry: true,
      secureTextEntry: true,
    };
  }

  insertNewUser = () => {
    var user = this.state.user;
    var email = this.state.email;
    var password = this.state.password;
    var confirmPw = this.state.confirmPw;
    var statusMember = this.state.statusMember;

    if (
      user.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      confirmPw.length == 0
    ) {
      alert("Harap isi data dengan benar!!");
    } else if (password !== confirmPw) {
      Alert.alert("Password tidak cocok!!");
    } else {
      setDoc(doc(db, "users", user), {
        username: user,
        email: email,
        password: password,
        statusMember: statusMember,
      })
        .then(() => {
          console.log("data submitted");
          Alert.alert("Pendaftaran Berhasil!");
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  updateConfirmSecureTextEntry() {
    this.setState({
      ...this.state,
      confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
    });
  }
  render() {
    return (
      <ScrollView backgroundColor="black">
        <View style={styles.viewStyle}>
          {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="#aaaaaa"
              style={styles.textInput}
              onChangeText={(user) => this.setState({ user })}
            />
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#aaaaaa"
              style={styles.textInput}
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="New Password"
              autoCapitalize="none"
              placeholderTextColor="#aaaaaa"
              secureTextEntry={this.state.secureTextEntry ? true : false}
              style={styles.textInput}
              onChangeText={(password) => this.setState({ password })}
            />
            <TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>
              {this.state.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                  style={{ margin: 15 }}
                />
              ) : (
                <Feather
                  name="eye"
                  color="black"
                  size={20}
                  style={{ margin: 15 }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Confirm Password"
              autoCapitalize="none"
              placeholderTextColor="#aaaaaa"
              style={styles.textInput}
              onChangeText={(confirmPw) => this.setState({ confirmPw })}
              secureTextEntry={this.state.confirmSecureTextEntry ? true : false}
            />
            <TouchableOpacity
              onPress={this.updateConfirmSecureTextEntry.bind(this)}
            >
              {this.state.confirmSecureTextEntry ? (
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                  style={{ margin: 15 }}
                />
              ) : (
                <Feather
                  name="eye"
                  color="black"
                  size={20}
                  style={{ margin: 15 }}
                />
              )}
            </TouchableOpacity>
          </View>
          <Pressable
            style={styles.registerButton}
            onPress={() => {
              this.insertNewUser();
            }}
          >
            <Text style={styles.text}>SignUp</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
}

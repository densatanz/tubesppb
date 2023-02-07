import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { doc, setDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./config";
import { firebase } from "./fetch";
import Styles from "./styleprof";
import styles from "./styleprof";

const EditProf = (props) => {
  const usernameDB = props.route.params.username;
  const emailDB = props.route.params.email;

  const [username, setUsername] = useState(usernameDB);
  const [email, setEmail] = useState(emailDB);

  const updateUser = () => {
    updateDoc(doc(db, "users", usernameDB), {
      username: username,
      email: email,
    })
      .then(() => {
        console.log("data submitted");
        Alert.alert("Update Berhasil!");
        props.navigation.navigate("BottomNavigator", {
          username: username,
          email: email,
        });
      })
      .catch((error) => {
        Alert.alert("Update Gagal!");
        console.log(error);
      });
  };
  return (
    <ScrollView backgroundColor="black">
      <View style={styles.viewStyle}>
        <View style={styles.oldStyle}>
          <Text style={styles.text}>{emailDB}</Text>
        </View>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="New Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        {/* <TextInput
    placeholder="Bio"
    value={profile.bio}
    onChangeText={(text) => setProfile({ ...profile, bio: text })}
  /> */}
        <Pressable style={styles.registerButton} onPress={updateUser}>
          <Text style={styles.textButton}>Save Change</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default EditProf;

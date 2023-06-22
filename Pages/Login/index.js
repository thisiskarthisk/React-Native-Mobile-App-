import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function LOGIN() {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#c99dd1",
          alignItems: "center",
          justifyContent: "center",
        },
        inputView: {
          backgroundColor: "#b225cc",
          borderRadius: 30,
          width: "70%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        },
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 20,
        },
        loginBtn: {
          width: "50%",
          backgroundColor: "#b225cc",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        },
      });
      
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>  */}
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}


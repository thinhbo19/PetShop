import React, { useState } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import { TextInput, Button, Title, Caption } from "react-native-paper";
import petShopLogo from "../assets/White Playful Pet Shop Logo.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Lỗi", "Vui lòng nhập tên người dùng và mật khẩu.");
      return;
    }
    Alert.alert("Đăng nhập thành công", `Chào mừng ${email}!`);
    // Navigate to the main screen after successful login
    navigation.replace("MainTabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={petShopLogo} style={styles.logo} />
      </View>
      <Title style={styles.title}>🐾 LOGIN 🐾</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: "#FF9D00" } }}
      />
      <TextInput
        label="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: "#FF9D00" } }}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <View style={styles.linkContainer}>
        <Button onPress={() => navigation.navigate("Register")}>
          Register
        </Button>
        <Button onPress={() => navigation.navigate("ForgotPassword")}>
          Forgot Password?
        </Button>
      </View>
      <Caption style={styles.footer}>© 2024 PetShop.</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#F0F4F8",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FF9D00",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#FF9D00",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },
});

export default Login;

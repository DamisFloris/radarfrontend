import { View, Button, StyleSheet, SafeAreaView } from "react-native";
import { AppTextInput } from "components/AppTextInput";
import { AppText } from "components/AppText";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://192.168.1.3:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json();
      console.log("Login success", data);
      await SecureStore.setItemAsync("token", data.access_token);

      router.replace("/"); // ← va al layout principale, che ridirige ai tabs
    } catch (err) {
      console.error("Login error", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppText>{t("login.welcome")}</AppText>
      <AppText>Email</AppText>
      <AppTextInput
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <AppText>Password</AppText>
      <AppTextInput
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
        secureTextEntry
        style={{ borderWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

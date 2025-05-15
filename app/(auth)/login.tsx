import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={{ borderWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

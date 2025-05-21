import { View, Button, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

//Components
import { AppTextInput } from "components/AppTextInput";
import { AppButton } from "components/AppButton";
import { AppText } from "components/AppText";

//Utils
import * as SecureStore from "expo-secure-store";
import { useTranslation } from "react-i18next";
import { g } from "theme/global";

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
      <View
        style={[
          { flex: 2 },
          g.justifyCenter,
          g.gapXl,
          { paddingHorizontal: g.padLg.padding },
        ]}
      >
        <AppText bold style={[g.textCenter, { fontSize: 30 }]}>
          {t("login.welcome")}
        </AppText>
        <View style={[g.gapMd]}>
          <View style={[g.gapXs]}>
            <AppText>Email</AppText>
            <AppTextInput
              onChangeText={setEmail}
              placeholder="mail@test.com"
              value={email}
            />
          </View>
          <View style={[g.gapXs]}>
            <AppText>Password</AppText>
            <AppTextInput
              onChangeText={setPassword}
              placeholder="SuperSecretPassword"
              value={password}
              password
            />
          </View>
          <AppText bold disabled>
            {t("login.forgotPassword")}
          </AppText>
        </View>
        <AppButton placeholder="Login" bold onPress={handleLogin} />
      </View>
      <View style={[g.flex, { paddingHorizontal: g.padLg.padding }]}>
        <View style={[g.row, g.justifyBetween, g.itemsCenter]}>
          <View
            style={{ borderTopWidth: 1, borderTopColor: "white", width: "35%" }}
          />
          <AppText> Accedi con </AppText>
          <View
            style={{ borderTopWidth: 1, borderTopColor: "white", width: "35%" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

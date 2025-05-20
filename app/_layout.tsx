import { Slot, SplashScreen, useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import "../i18n"; // Import your i18n configuration
import * as SecureStore from "expo-secure-store";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_700Bold,
  });
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync("token");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.replace("/(auth)/login" as any);
      }
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}

import {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

interface AppTextInputProps extends TextInputProps {
  bold?: boolean;
  height?: number;
  password?: boolean;
}

export function AppTextInput({
  style,
  bold = false,
  height = 54,
  password = false,
  ...rest
}: AppTextInputProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 8,
        height,
        paddingHorizontal: 16,
      }}
    >
      <TextInput
        {...rest}
        secureTextEntry={password && !isShown}
        style={[
          {
            flex: 1,
            fontFamily: bold ? "Urbanist_700Bold" : "Urbanist_400Regular",
            color: "black",
            paddingVertical: 16, // giusta altezza tappabile
          },
          style,
        ]}
        placeholderTextColor={"#999"}
      />

      {password && (
        <TouchableOpacity
          onPress={() => setIsShown((prev) => !prev)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // <- questa è la chiave!
        >
          <Feather name={isShown ? "eye-off" : "eye"} size={20} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

import { TextInput, TextInputProps } from "react-native";

interface AppTextInputProps extends TextInputProps {
  bold?: boolean;
  height?: number;
}

export function AppTextInput({
  style,
  bold = false,
  height = 54,
  ...rest
}: AppTextInputProps) {
  const defaultStyle = {
    fontFamily: bold ? "Urbanist_700Bold" : "Urbanist_400Regular",
    color: "black",
    backgroundColor: "white",
    height,
    padding: 16,
    borderRadius: 8,
  };

  return <TextInput {...rest} style={[defaultStyle, style]} />;
}

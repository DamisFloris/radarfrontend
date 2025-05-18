import { Text, TextProps, TextStyle } from "react-native";

interface AppTextProps extends TextProps {
  bold?: boolean;
}

export function AppText({ style, bold = false, ...rest }: AppTextProps) {
  const fontStyle: TextStyle = {
    fontFamily: bold ? "Urbanist_700Bold" : "Urbanist_400Regular",
    color: "white",
  };

  return <Text {...rest} style={[fontStyle, style]} />;
}

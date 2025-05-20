import { Text, TextProps, TextStyle } from "react-native";
import { vars } from "theme/vars";
interface AppTextProps extends TextProps {
  bold?: boolean;
  disabled?: boolean;
}

export function AppText({
  style,
  bold = false,
  disabled = false,
  ...rest
}: AppTextProps) {
  const fontStyle: TextStyle = {
    fontFamily: bold ? "Urbanist_700Bold" : "Urbanist_400Regular",
    color: disabled ? vars.disabled : "white",
    fontSize: 16,
  };

  return <Text {...rest} style={[fontStyle, style]} />;
}

import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AppText } from "./AppText";
import { vars } from "theme/vars";

interface AppButtonProps extends TouchableOpacityProps {
  placeholder?: string;
  color?: string;
  bold?: boolean;
  fit?: boolean;
}

export const AppButton = ({
  placeholder = "",
  color = "white",
  bold = false,
  fit = false,
  ...rest
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        {
          alignItems: "center",
          backgroundColor: vars.primary,
          borderRadius: 8,
          padding: 16,
        },
      ]}
    >
      <AppText bold={bold} style={{ color }}>
        {placeholder}
      </AppText>
    </TouchableOpacity>
  );
};

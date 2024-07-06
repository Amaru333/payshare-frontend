import { TextInputProps, TextStyle, TouchableOpacityProps } from "react-native";

export interface UIInputProps extends TextInputProps {
  label: string;
}

export interface UIButtonProps extends TouchableOpacityProps {
  theme?: "primary" | "secondary";
  children: React.ReactNode;
  textStyle?: TextStyle;
}

export interface OTPInputProps {
  label: string;
}

export interface UIDropdownProps {
  label: string;
  items: { name: string; value: string }[];
  onChange: (item: { name: string; value: string }) => void;
  value: string;
  searchable?: boolean;
}

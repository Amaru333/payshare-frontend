import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { UIButtonProps } from "./widgetTypes";
import { ThemedText } from "@/components/ThemedText";

const UIButton = ({ children, style, theme = "primary", ...rest }: UIButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: theme === "primary" ? "#AB41FF" : "#543BED" }, style]} activeOpacity={0.8} {...rest}>
      <ThemedText style={{ fontFamily: "Poppins600", fontSize: 14 }}>{children}</ThemedText>
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
  },
});

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { UIInputProps } from "./widgetTypes";

const UIInput = ({ label, disabled = false, style, theme = "light", ...rest }: UIInputProps) => {
  return (
    <View style={styles.container}>
      <ThemedText style={[styles.labelStyle, { color: theme === "light" ? "#ECEDEE" : "black" }]}>{label}</ThemedText>
      <TextInput style={[styles.textInputStyle, { backgroundColor: disabled ? "#999" : "white", borderColor: theme === "light" ? "transparent" : "black" }, style]} placeholderTextColor="#999" editable={!disabled} {...rest} />
    </View>
  );
};

export default UIInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelStyle: {
    fontSize: 12,
  },
  textInputStyle: {
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
});

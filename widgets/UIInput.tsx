import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { UIInputProps } from "./widgetTypes";

const UIInput = ({ label, ...rest }: UIInputProps) => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.labelStyle}>{label}</ThemedText>
      <TextInput style={styles.textInputStyle} placeholderTextColor="#999" {...rest} />
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
    backgroundColor: "white",
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { UICheckboxProps } from "./widgetTypes";
import { CheckIcon } from "@gluestack-ui/themed";
import { ThemedText } from "@/components/ThemedText";

const UICheckbox = ({ size = 16, selected, onPress, label, labelStyle }: UICheckboxProps) => {
  return (
    <TouchableOpacity onPress={() => onPress && onPress(!selected)} activeOpacity={0.7} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 6 }}>
      <View style={{ width: size, height: size, borderRadius: 3, backgroundColor: selected ? "#AB41FF" : "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CheckIcon style={{ width: size * 0.7, height: size * 0.7 }} color="white" />
      </View>
      {label && <ThemedText style={labelStyle}>{label}</ThemedText>}
    </TouchableOpacity>
  );
};

export default UICheckbox;

const styles = StyleSheet.create({});

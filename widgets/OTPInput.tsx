import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { OTPInputProps } from "./widgetTypes";

const { width } = Dimensions.get("window");
const OTPInput = ({ label }: OTPInputProps) => {
  const ref_input1 = React.createRef<TextInput>();
  const ref_input2 = React.createRef<TextInput>();
  const ref_input3 = React.createRef<TextInput>();
  const ref_input4 = React.createRef<TextInput>();
  const ref_input5 = React.createRef<TextInput>();
  const ref_input6 = React.createRef<TextInput>();
  return (
    <View>
      <ThemedText style={styles.labelStyle}>{label}</ThemedText>
      <View style={styles.container}>
        <TextInput
          ref={ref_input1}
          onChange={() => {}}
          inputMode="numeric"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={1}
          placeholder="0"
          caretHidden
          style={styles.textBoxStyle}
          onKeyPress={({ nativeEvent }) => {
            if (ref_input1.current !== null && ref_input2.current !== null) {
              if (nativeEvent.key === "Backspace") {
                ref_input1.current.focus();
              } else {
                ref_input2.current.focus();
              }
            }
          }}
          selectTextOnFocus
        />
        <TextInput
          ref={ref_input2}
          onChange={() => {}}
          inputMode="numeric"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={1}
          placeholder="0"
          caretHidden
          style={styles.textBoxStyle}
          onKeyPress={({ nativeEvent }) => {
            if (ref_input1.current !== null && ref_input3.current !== null) {
              if (nativeEvent.key === "Backspace") {
                ref_input1.current.focus();
              } else {
                ref_input3.current.focus();
              }
            }
          }}
          selectTextOnFocus
        />
        <TextInput
          ref={ref_input3}
          onChange={() => {}}
          inputMode="numeric"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={1}
          placeholder="0"
          caretHidden
          style={styles.textBoxStyle}
          onKeyPress={({ nativeEvent }) => {
            if (ref_input4.current !== null && ref_input2.current !== null) {
              if (nativeEvent.key === "Backspace") {
                ref_input2.current.focus();
              } else {
                ref_input4.current.focus();
              }
            }
          }}
          selectTextOnFocus
        />
        <TextInput
          ref={ref_input4}
          onChange={() => {}}
          inputMode="numeric"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={1}
          placeholder="0"
          caretHidden
          style={styles.textBoxStyle}
          onKeyPress={({ nativeEvent }) => {
            if (ref_input3.current !== null && ref_input5.current !== null) {
              if (nativeEvent.key === "Backspace") {
                ref_input3.current.focus();
              } else {
                ref_input5.current.focus();
              }
            }
          }}
          selectTextOnFocus
        />
        <TextInput
          ref={ref_input5}
          onChange={() => {}}
          inputMode="numeric"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={1}
          placeholder="0"
          caretHidden
          style={styles.textBoxStyle}
          onKeyPress={({ nativeEvent }) => {
            if (ref_input4.current !== null && ref_input6.current !== null) {
              if (nativeEvent.key === "Backspace") {
                ref_input4.current.focus();
              } else {
                ref_input6.current.focus();
              }
            }
          }}
          selectTextOnFocus
        />
        <TextInput
          ref={ref_input6}
          onChange={() => {}}
          inputMode="numeric"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={1}
          placeholder="0"
          caretHidden
          style={styles.textBoxStyle}
          onKeyPress={({ nativeEvent }) => {
            if (ref_input5.current !== null && ref_input6.current !== null) {
              if (nativeEvent.key === "Backspace") {
                ref_input5.current.focus();
              } else {
                ref_input6.current.focus();
              }
            }
          }}
          selectTextOnFocus
        />
      </View>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
  container: {
    width: width - 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBoxStyle: {
    backgroundColor: "white",
    width: (width - 96) / 6,
    marginRight: 10,
    borderRadius: 8,
    height: 50,
    textAlign: "center",
    fontSize: 20,
  },
});

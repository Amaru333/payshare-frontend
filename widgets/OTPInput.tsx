import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { OTPInputProps } from "./widgetTypes";

const { width } = Dimensions.get("window");
const OTPInput = ({ label, value, onChange }: OTPInputProps) => {
  const ref_input1 = React.createRef<TextInput>();
  const ref_input2 = React.createRef<TextInput>();
  const ref_input3 = React.createRef<TextInput>();
  const ref_input4 = React.createRef<TextInput>();
  const ref_input5 = React.createRef<TextInput>();
  const ref_input6 = React.createRef<TextInput>();
  const [otpValue, setOtpValue] = React.useState(["", "", "", "", "", ""]);
  return (
    <View>
      <ThemedText style={styles.labelStyle}>{label}</ThemedText>
      <View style={styles.container}>
        <TextInput
          ref={ref_input1}
          value={value.length > 0 ? value[0] : otpValue[0].length > 0 ? otpValue[0] : ""}
          onChangeText={(e) => {
            const otp = [...otpValue];
            otp[0] = e;
            setOtpValue(otp);
            onChange(otp.join(""));
          }}
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
          value={value.length > 1 ? value[1] : otpValue[1].length > 0 ? otpValue[1] : ""}
          onChangeText={(e) => {
            const otp = [...otpValue];
            otp[1] = e;
            setOtpValue(otp);
            onChange(otp.join(""));
          }}
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
          value={value.length > 2 ? value[2] : otpValue[2].length > 0 ? otpValue[2] : ""}
          onChangeText={(e) => {
            const otp = [...otpValue];
            otp[2] = e;
            setOtpValue(otp);
            onChange(otp.join(""));
          }}
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
          value={value.length > 3 ? value[3] : otpValue[3].length > 0 ? otpValue[3] : ""}
          onChangeText={(e) => {
            const otp = [...otpValue];
            otp[3] = e;
            setOtpValue(otp);
            onChange(otp.join(""));
          }}
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
          value={value.length > 4 ? value[4] : otpValue[4].length > 0 ? otpValue[4] : ""}
          onChangeText={(e) => {
            const otp = [...otpValue];
            otp[4] = e;
            setOtpValue(otp);
            onChange(otp.join(""));
          }}
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
          value={value.length > 5 ? value[5] : otpValue[5].length > 0 ? otpValue[5] : ""}
          onChangeText={(e) => {
            const otp = [...otpValue];
            otp[5] = e;
            setOtpValue(otp);
            onChange(otp.join(""));
          }}
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

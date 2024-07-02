import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { router } from "expo-router";
import UIButton from "@/widgets/UIButton";
import OtpInput from "@/widgets/OTPInput";
import { ThemedText } from "@/components/ThemedText";
import { OTPVerificationProps } from "./componentTypes";

const { width: screenWidth } = Dimensions.get("window");

const OTPVerification = ({ backPage }: OTPVerificationProps) => {
  return (
    <View style={{ width: screenWidth, padding: 24, display: "flex", justifyContent: "space-between" }}>
      <View style={styles.otpContainer}>
        <ThemedText style={{ fontSize: 14 }}>
          We have sent an OTP to <ThemedText style={{ fontFamily: "Poppins500", color: "#AB41FF", fontSize: 14 }}>username@email.com</ThemedText>, please verify to continue
        </ThemedText>
        <OtpInput label="OTP" />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          style={{
            width: screenWidth / 2 - 50,
          }}
          theme="secondary"
          onPress={backPage}
        >
          EDIT EMAIL
        </UIButton>
        <UIButton
          style={{
            width: screenWidth / 2 - 50,
          }}
          onPress={() => {
            router.navigate("/create-profile");
          }}
        >
          LOGIN
        </UIButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  otpContainer: {
    display: "flex",
    rowGap: 24,
  },
  bgContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  bgView: {
    padding: 24,
    width: "100%",
    display: "flex",
    alignItems: "center",
    rowGap: 100,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 16,
    justifyContent: "center",
  },
});
export default OTPVerification;

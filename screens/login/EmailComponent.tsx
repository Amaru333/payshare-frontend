import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import UIInput from "@/widgets/UIInput";
import UIButton from "@/widgets/UIButton";
import { EmailComponentProps } from "./componentTypes";

const { width: screenWidth } = Dimensions.get("window");
const EmailComponent = ({ nextPage, email, setEmail, loading }: EmailComponentProps) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (
    // <View style={{ height: "100%", width: screenWidth }}>
    //   <ImageBackground source={require("../../assets/images/backgrounds/onboardingbg.png")} style={styles.bgContainer}>
    //     <KeyboardAvoidingView style={styles.bgView}>
    //       <Logo />
    <View style={{ width: screenWidth, display: "flex", alignItems: "center", padding: 24, justifyContent: "space-between" }}>
      <UIInput label="Email Address" placeholder="user@email.com" keyboardType="email-address" autoComplete="email" inputMode="email" value={email} onChangeText={(e) => setEmail(e)} />
      <UIButton disabled={!emailRegex.test(email) || loading} style={{ width: 200 }} onPress={nextPage}>
        CONTINUE
      </UIButton>
    </View>
    //     </KeyboardAvoidingView>
    //   </ImageBackground>
    // </View>
  );
};
const styles = StyleSheet.create({
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
});
export default EmailComponent;

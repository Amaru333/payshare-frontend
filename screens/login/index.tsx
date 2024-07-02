import React from "react";
import EmailComponent from "./EmailComponent";
import { Dimensions, ImageBackground, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Logo from "@/assets/icons/logo.svg";
import OTPVerification from "./OTPVerification";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const LoginScreen = () => {
  let screenIndex = 0;
  const scrollViewRef = React.createRef<ScrollView>();
  const toNextPage = () => {
    screenIndex = 1;
    scrollViewRef.current?.scrollTo({ x: screenWidth * 1, animated: true });
  };
  const toBackPage = () => {
    screenIndex = 0;
    scrollViewRef.current?.scrollTo({ x: screenWidth * 0, animated: true });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ height: "100%", width: "100%" }}>
        <ImageBackground source={require("../../assets/images/backgrounds/onboardingbg.png")} style={styles.bgContainer}>
          <KeyboardAvoidingView style={styles.bgView}>
            <View style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <Logo />
            </View>
            <View style={{ width: "100%", height: screenHeight / 3 }}>
              <ScrollView horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: "100%" }} ref={scrollViewRef}>
                <EmailComponent nextPage={toNextPage} />
                <OTPVerification backPage={toBackPage} />
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: screenHeight / 2,
  },
});

export default LoginScreen;

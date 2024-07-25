import React from "react";
import EmailComponent from "./EmailComponent";
import { Dimensions, ImageBackground, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Logo from "@/assets/icons/logo.svg";
import OTPVerification from "./OTPVerification";
import httpRequest from "@/utils/httpRequest";
import { USER_API } from "@/constants/APIConstants";
import { useToast } from "@gluestack-ui/themed";
import UIToast from "@/widgets/UIToast";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const LoginScreen = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [emailLoading, setEmailLoading] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  let screenIndex = 0;
  const scrollViewRef = React.createRef<ScrollView>();
  const toNextPage = () => {
    httpRequest
      .post(USER_API.SEND_OTP, { email }, { params: { auth: false } })
      .then((res) => {
        screenIndex = 1;
        scrollViewRef.current?.scrollTo({ x: screenWidth * 1, animated: true });
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  };
  const toBackPage = () => {
    screenIndex = 0;
    scrollViewRef.current?.scrollTo({ x: screenWidth * 0, animated: true });
  };

  const onLogin = async () => {
    try {
      const res = await httpRequest.post(USER_API.VERIFY_OTP, { email, otp }, { params: { auth: false } });
      dispatch(setUser(res.data));
      await AsyncStorage.setItem("auth-token", res.headers["auth-token"]);
      if (res.data?.full_name && res.data?.username && res.data?.phone_number && res.data?.default_currency) {
        router.replace("/(tabs)/dashboard");
      } else {
        router.navigate({ pathname: "/create-profile", params: { full_name: res.data?.full_name, username: res.data?.username, phone_number: res.data?.phone_number, default_currency: res.data?.default_currency } });
      }
    } catch (error) {
      console.log(error, "LOGIN ERROR");
      toast.show({
        render: () => <UIToast id="login" message="Login Unsuccessful" action="error" />,
      });
    }
    // httpRequest
    //   .post(USER_API.VERIFY_OTP, { email, otp }, { params: { auth: false } })
    //   .then((res) => {
    //     // router.replace("/create-profile");
    //     if (res.data?.full_name && res.data?.username && res.data?.phone_number && res.data?.default_currency) {
    //       router.replace("/(tabs)/dashboard");
    //     } else {
    //       router.navigate("/create-profile");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err, "LOGIN ERROR");
    //     toast.show({
    //       render: () => <UIToast id="login" message="Login Unsuccessful" action="error" />,
    //     });
    //   });
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
                <EmailComponent nextPage={toNextPage} email={email} setEmail={setEmail} loading={emailLoading} />
                <OTPVerification backPage={toBackPage} otp={otp} setOtp={setOtp} email={email} onLogin={onLogin} />
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

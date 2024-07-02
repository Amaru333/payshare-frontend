import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const SplashScreen = () => {
  return (
    <View>
      <ThemedText>Test</ThemedText>
      <ThemedText>Test</ThemedText>
      <ThemedText>Test</ThemedText>
      <ThemedText>Test</ThemedText>
      <ThemedText>Test</ThemedText>
      <ThemedText style={{ fontFamily: "Poppins800" }}>Test</ThemedText>
      <Link href="/login">
        <ThemedText>Login</ThemedText>
      </Link>
    </View>
  );
};

export default SplashScreen;

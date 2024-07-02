import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={require("@/assets/images/backgrounds/dashboardbg.png")} style={styles.bgContainer}>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default DashboardContainer;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    resizeMode: "cover",
  },
});

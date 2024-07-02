import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

const DashboardContainer = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => {
  return (
    <ImageBackground source={require("@/assets/images/backgrounds/dashboardbg.png")} style={[styles.bgContainer, style]}>
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

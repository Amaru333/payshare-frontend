import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const GradientCard = ({ children, style }: { children: ReactNode; style?: ViewStyle }) => {
  return (
    <LinearGradient colors={["rgba(103,39,153,0.14)", "rgba(84,59,237,0.14)"]} end={{ x: 0.35, y: 0.4 }} start={{ x: 0.85, y: 0.15 }} style={[{ borderRadius: 16, flex: 1 }, style]} locations={[0.5, 0.8]}>
      <BlurView style={{ borderRadius: 16 }} intensity={40}>
        {children}
      </BlurView>
    </LinearGradient>
  );
};

export default GradientCard;

const styles = StyleSheet.create({});

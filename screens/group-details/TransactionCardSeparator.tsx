import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TransactionCardSeparator = () => {
  return <LinearGradient colors={["rgba(84, 59, 237, 0.2)", "rgba(171, 65, 255, 0.2)"]} style={{ height: 1, width: "100%", marginTop: 20, marginBottom: 20 }} />;
};

export default TransactionCardSeparator;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";

const Header = () => {
  return <ThemedText style={{ fontSize: 32, fontFamily: "Poppins600", lineHeight: 40 }}>Recent Transactions</ThemedText>;
};

export default Header;

const styles = StyleSheet.create({});

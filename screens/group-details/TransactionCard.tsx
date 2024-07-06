import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";

const TransactionCard = () => {
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <ThemedText style={{ flex: 1, marginRight: 10 }}>
          <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500" }}>You</ThemedText> paid
          <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500" }}> {convertToCurrency(232, "USD")} </ThemedText>
          for <ThemedText style={{ fontFamily: "Poppins600" }}>Groceries</ThemedText>
        </ThemedText>
        <ThemedText style={{ fontFamily: "Poppins300", fontSize: 10 }}>Wednesday at 14:22</ThemedText>
      </View>
      <View style={{ marginLeft: 20 }}>
        <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
          <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>Person A</ThemedText> owes you
          <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}> {convertToCurrency(100, "USD")} </ThemedText>
        </ThemedText>
        <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
          <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>Person A</ThemedText> owes you
          <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}> {convertToCurrency(100, "USD")} </ThemedText>
        </ThemedText>
        <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
          <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>Person A</ThemedText> owes you
          <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}> {convertToCurrency(100, "USD")} </ThemedText>
        </ThemedText>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({});

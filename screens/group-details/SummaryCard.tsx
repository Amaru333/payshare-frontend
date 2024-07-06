import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GradientCard from "@/components/GradientCard";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";

const SummaryCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <GradientCard>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
          <ThemedText style={{ fontSize: 14, fontFamily: "Poppins600" }}>You owe Person A</ThemedText>
          <ThemedText style={{ fontSize: 16, fontFamily: "Poppins600", color: "#AB41FF" }}>{convertToCurrency(21000, "USD")}</ThemedText>
        </View>
      </GradientCard>
    </TouchableOpacity>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({});

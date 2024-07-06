import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");
const graphCanvas = height * 0.4;
const barWidth = (width - 40) / 6 - 10;
const graphData = [
  {
    month: "Jan",
    amount: graphCanvas * 0.5,
  },
  {
    month: "Feb",
    amount: graphCanvas * 0.3,
  },
  {
    month: "Mar",
    amount: graphCanvas * 0.9,
  },
  {
    month: "Apr",
    amount: graphCanvas * 0.4,
  },
  {
    month: "May",
    amount: graphCanvas * 0.6,
  },
  {
    month: "Jun",
    amount: graphCanvas * 0.7,
  },
];

const GroupSummary = () => {
  return (
    <View style={{ paddingTop: 30, paddingBottom: 100 }}>
      <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20, marginBottom: 20 }}>Group Spends</ThemedText>
      <View style={{ height: graphCanvas, display: "flex", flexDirection: "row", alignItems: "flex-end", columnGap: 12 }}>
        {graphData.map((item, index) => (
          <LinearGradient key={index} style={{ height: item.amount, width: barWidth, borderRadius: 10 }} colors={["#AB41FF", "#543BED"]} />
        ))}
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", columnGap: 12 }}>
        {graphData.map((item, index) => (
          <ThemedText key={index} style={{ textAlign: "center", fontSize: 10, lineHeight: 16, marginTop: 10, flex: 1 }}>
            {item.month}
          </ThemedText>
        ))}
      </View>
      <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20, marginBottom: 20, marginTop: 40 }}>Individual Spends</ThemedText>
      <View style={{ height: graphCanvas, display: "flex", flexDirection: "row", alignItems: "flex-end", columnGap: 12 }}>
        {graphData.map((item, index) => (
          <LinearGradient key={index} style={{ height: item.amount, width: barWidth, borderRadius: 10 }} colors={["#AB41FF", "#543BED"]} />
        ))}
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", columnGap: 12 }}>
        {graphData.map((item, index) => (
          <ThemedText key={index} style={{ textAlign: "center", fontSize: 10, lineHeight: 16, marginTop: 10, flex: 1 }}>
            {item.month}
          </ThemedText>
        ))}
      </View>
    </View>
  );
};

export default GroupSummary;

const styles = StyleSheet.create({});

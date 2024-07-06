import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";

const HistoryCard = () => {
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <ThemedText style={{ fontFamily: "Poppins600", fontSize: 12 }}>Roommates</ThemedText>
        <ThemedText style={{ fontFamily: "Poppins300", fontSize: 10 }}>Wednesday at 14:22</ThemedText>
      </View>
      <ThemedText>
        <ThemedText style={{ fontFamily: "Poppins600", color: "#AB41FF" }}>User One</ThemedText> paid <ThemedText style={{ fontFamily: "Poppins600", color: "#543BED" }}>$100</ThemedText> for <ThemedText style={{ fontFamily: "Poppins600" }}>Food</ThemedText>. You owe{" "}
        <ThemedText style={{ fontFamily: "Poppins600", color: "#543BED" }}>$20</ThemedText>
      </ThemedText>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({});

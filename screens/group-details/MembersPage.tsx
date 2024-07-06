import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UIButton from "@/widgets/UIButton";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";
import MembersCard from "./MembersCard";

const MembersPage = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 100 }}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        <View>
          <UIButton textStyle={styles.buttonTextStyle} style={[styles.buttonStyle]} theme="secondary">
            Add member
          </UIButton>
        </View>
      </View>
      <View style={{ marginTop: 24, display: "flex", gap: 24 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>1. You</ThemedText>
          <ThemedText style={{ fontFamily: "Poppins300", fontSize: 14, color: "rgba(255, 255, 255, 0.6)" }}>settled 🎉</ThemedText>
        </View>
        <View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>2. Person A</ThemedText>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20, color: "#AB41FF" }}>owes {convertToCurrency(1400, "USD")}</ThemedText>
          </View>
          <View style={{ marginLeft: 20 }}>
            <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
              has to pay <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, color: "#AB41FF", lineHeight: 16 }}>$500</ThemedText> to <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>you</ThemedText>
            </ThemedText>
            <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
              has to pay <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, color: "#AB41FF", lineHeight: 16 }}>$500</ThemedText> to <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>Person B</ThemedText>
            </ThemedText>
          </View>
        </View>
        <MembersCard />
        <MembersCard />
        <MembersCard />
        <MembersCard />
        <MembersCard />
        <MembersCard />
      </View>
    </View>
  );
};

export default MembersPage;

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 12,
    fontFamily: "Poppins300",
    lineHeight: 18,
  },
  buttonStyle: {
    width: "auto",
    paddingHorizontal: 10,
    borderRadius: 100,
    paddingVertical: 4,
  },
});

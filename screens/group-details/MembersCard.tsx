import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";

const MembersCard = () => {
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>3. Person B</ThemedText>
        <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20, color: "#543BED" }}>lent {convertToCurrency(1400, "USD")}</ThemedText>
      </View>
      <View style={{ marginLeft: 20 }}>
        <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
          has to receive <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, color: "#AB41FF", lineHeight: 16 }}>$500</ThemedText> from <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>you</ThemedText>
        </ThemedText>
        <ThemedText style={{ fontSize: 10, lineHeight: 16 }}>
          has to receive <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, color: "#AB41FF", lineHeight: 16 }}>$500</ThemedText> from <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>Person B</ThemedText>
        </ThemedText>
      </View>
    </View>
  );
};

export default MembersCard;

const styles = StyleSheet.create({});

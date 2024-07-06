import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import UIButton from "@/widgets/UIButton";
import { ChevronDownIcon } from "@gluestack-ui/themed";
import GradientCard from "@/components/GradientCard";
import { convertToCurrency } from "@/functions/currency";

const StatsSummary = () => {
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>Monthly Stats</ThemedText>
        <View>
          <UIButton theme="secondary" textStyle={{ fontSize: 12, fontFamily: "Poppins500" }} style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100 }}>
            Jun 1 - Jun 30 <ChevronDownIcon color="white" />
          </UIButton>
        </View>
      </View>
      <View style={{ marginVertical: 20, display: "flex", flexDirection: "row", gap: 20 }}>
        <GradientCard style={{ padding: 12 }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16 }}>Transactions</ThemedText>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 10, lineHeight: 16 }}>whole group</ThemedText>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingVertical: 12 }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 24, lineHeight: 48 }}>2,500</ThemedText>
          </View>
        </GradientCard>
        <GradientCard style={{ padding: 12 }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16 }}>Amount Spent</ThemedText>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 10, lineHeight: 16 }}>whole group</ThemedText>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingVertical: 12 }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 24, lineHeight: 48 }}>{convertToCurrency(2500, "USD")}</ThemedText>
          </View>
        </GradientCard>
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <GradientCard style={{ padding: 12 }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16 }}>Transactions</ThemedText>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 10, lineHeight: 16 }}>yours</ThemedText>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingVertical: 12 }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 24, lineHeight: 48 }}>500</ThemedText>
          </View>
        </GradientCard>
        <GradientCard style={{ padding: 12 }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16 }}>Amount Spent</ThemedText>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 10, lineHeight: 16 }}>yours (net amount)</ThemedText>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingVertical: 12 }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 24, lineHeight: 48 }}>{convertToCurrency(500, "USD")}</ThemedText>
          </View>
        </GradientCard>
      </View>
    </View>
  );
};

export default StatsSummary;

const styles = StyleSheet.create({});

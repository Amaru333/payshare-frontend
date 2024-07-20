import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GradientCard from "@/components/GradientCard";
import { ThemedText } from "@/components/ThemedText";

import GroupIcon from "@/assets/icons/group.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import { SummaryCardProps } from "@/constants/CommonInterfaces";
import { convertToCurrency } from "@/functions/currency";
import { router } from "expo-router";

const SummaryCard = ({ id, type, name, members, owe, lent }: SummaryCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/(tabs)/dashboard/group/group-details")}>
      <GradientCard>
        <View style={{ paddingHorizontal: 12, paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>{name}</ThemedText>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 4 }}>
              {type === "group" ? <GroupIcon width={16} height={16} /> : <ProfileIcon width={12} height={12} />}
              {type === "group" && <ThemedText style={{ fontFamily: "Poppins600", fontSize: 12 }}>{members.length}</ThemedText>}
            </View>
          </View>
          {owe !== 0 && lent !== 0 ? (
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
              <View>
                <ThemedText style={{ fontSize: 12, fontFamily: "Poppins600" }}>You owe</ThemedText>
                <ThemedText style={{ color: "#AB41FF", fontSize: 24, fontFamily: "Poppins600", lineHeight: 30 }}>{convertToCurrency(owe, "USD")}</ThemedText>
              </View>
              <View style={{ display: "flex", alignItems: "flex-end" }}>
                <ThemedText style={{ fontSize: 12, fontFamily: "Poppins600" }}>You've lent</ThemedText>
                <ThemedText style={{ color: "#543BED", fontSize: 24, fontFamily: "Poppins600", lineHeight: 30 }}>{convertToCurrency(lent, "USD")}</ThemedText>
              </View>
            </View>
          ) : (
            <View style={{ display: "flex", alignItems: "center", paddingVertical: 20 }}>
              <ThemedText style={{ fontSize: 14, fontFamily: "Poppins300", color: "rgba(255,255,255,0.65)" }}>Your transactions are settled&nbsp;&nbsp;🎉</ThemedText>
            </View>
          )}
        </View>
      </GradientCard>
    </TouchableOpacity>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({});

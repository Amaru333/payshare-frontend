import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";

interface MembersCardProps {
  member: any;
  idx: number;
  splitData: any;
}

const MembersCard = ({ member, idx, splitData }: MembersCardProps) => {
  return member?.amount === 0 ? (
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} key={idx}>
      <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>
        {idx + 1}. {member?.user?.full_name}
      </ThemedText>
      <ThemedText style={{ fontFamily: "Poppins300", fontSize: 14, color: "rgba(255, 255, 255, 0.6)" }}>settled 🎉</ThemedText>
    </View>
  ) : (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>
          {idx + 1}. {member?.user?.full_name}
        </ThemedText>
        <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20, color: member?.amount > 0 ? "#543BED" : "#AB41FF" }}>
          {member?.amount > 0 ? `lent` : `owes`} {convertToCurrency(Math.abs(member?.amount), "USD")}
        </ThemedText>
      </View>
      <View style={{ marginLeft: 20 }}>
        {splitData
          ?.filter((item: any) => item?.amount > 0 && (item?.paid_by?._id === member?.user?._id || item?.paid_to?._id === member?.user?._id))
          .map((item: any, index: number) =>
            item?.paid_by?._id === member?.user?._id ? (
              <ThemedText style={{ fontSize: 10, lineHeight: 16 }} key={index}>
                has to pay <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, color: "#AB41FF", lineHeight: 16 }}>{convertToCurrency(item?.amount, "USD")}</ThemedText> to <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>{item?.paid_to?.full_name}</ThemedText>
              </ThemedText>
            ) : (
              <ThemedText style={{ fontSize: 10, lineHeight: 16 }} key={index}>
                has to receive <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, color: "#AB41FF", lineHeight: 16 }}>{convertToCurrency(item?.amount, "USD")}</ThemedText> from{" "}
                <ThemedText style={{ fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>{item?.paid_by?.full_name}</ThemedText>
              </ThemedText>
            )
          )}
      </View>
    </View>
  );
};

export default MembersCard;

const styles = StyleSheet.create({});

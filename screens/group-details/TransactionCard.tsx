import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";
import { formatDateTime } from "@/functions/timeFormat";
import { UserInterface } from "@/constants/CommonInterfaces";

interface TransactionCardProps {
  paidBy: string;
  amount: number;
  transactionName: string;
  createdAt: string;
  id: string;
  split: any;
  currentUser: UserInterface;
  type: "transaction" | "settle";
}

const TransactionCard = ({ currentUser, paidBy, amount, transactionName, createdAt, id, split, type }: TransactionCardProps) => {
  return type === "transaction" ? (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <ThemedText style={{ flex: 1, marginRight: 10 }}>
          <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500" }}>{paidBy}</ThemedText> paid
          <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500" }}> {convertToCurrency(amount, "USD")} </ThemedText>
          for <ThemedText style={{ fontFamily: "Poppins600" }}>{transactionName}</ThemedText>
        </ThemedText>
        <ThemedText style={{ fontFamily: "Poppins300", fontSize: 10 }}>{formatDateTime(createdAt)}</ThemedText>
      </View>
      <View style={{ marginLeft: 20 }}>
        {split.map(
          (s: any, idx: number) =>
            s.amount > 0 && (
              <ThemedText key={idx} style={{ fontSize: 10, lineHeight: 16 }}>
                <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}>{s.user._id === currentUser._id ? "You" : s.user.full_name}</ThemedText> {s.user._id === currentUser._id ? "owe" : "owes"}
                <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500", fontSize: 10, lineHeight: 16 }}> {convertToCurrency(s.amount, "USD")} </ThemedText>
              </ThemedText>
            )
        )}
      </View>
    </View>
  ) : (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <ThemedText style={{ flex: 1, marginRight: 10 }}>
          <ThemedText style={{ color: "#AB41FF", fontFamily: "Poppins500" }}>{paidBy}</ThemedText> settled
          <ThemedText style={{ color: "#543BED", fontFamily: "Poppins500" }}> {convertToCurrency(amount, "USD")} </ThemedText>
          to <ThemedText style={{ fontFamily: "Poppins600" }}>{split[0]?.user?.full_name} 🎉</ThemedText>
        </ThemedText>
        <ThemedText style={{ fontFamily: "Poppins300", fontSize: 10 }}>{formatDateTime(createdAt)}</ThemedText>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({});

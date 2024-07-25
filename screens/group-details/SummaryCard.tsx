import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GradientCard from "@/components/GradientCard";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";
import { UserInterface } from "@/constants/CommonInterfaces";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/slices/userSlice";

interface SummaryCardProps {
  amount: number;
  paid_by: UserInterface;
  paid_to: UserInterface;
}

const SummaryCard = ({ amount, paid_by, paid_to }: SummaryCardProps) => {
  const currentUser = useSelector(getUser);
  const checkUserName = (user: UserInterface) => {
    if (currentUser._id === user._id) {
      return "You";
    } else {
      return user.full_name;
    }
  };
  const owesOrOwe = (user: UserInterface) => {
    if (currentUser._id === user._id) {
      return "owe";
    } else {
      return "owes";
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <GradientCard>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
          <ThemedText style={{ fontSize: 14, fontFamily: "Poppins600" }}>
            {checkUserName(paid_by)} {owesOrOwe(paid_by)} {checkUserName(paid_to)}
          </ThemedText>
          <ThemedText style={{ fontSize: 16, fontFamily: "Poppins600", color: "#AB41FF" }}>{convertToCurrency(amount, "USD")}</ThemedText>
        </View>
      </GradientCard>
    </TouchableOpacity>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({});

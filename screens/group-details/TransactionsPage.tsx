import { StyleSheet, View } from "react-native";
import React from "react";
import TransactionCard from "./TransactionCard";
import TransactionCardSeparator from "./TransactionCardSeparator";

const TransactionsPage = () => {
  return (
    <View style={{ padding: 20, paddingBottom: 100 }}>
      <TransactionCard />
      <TransactionCardSeparator />
      <TransactionCard />
      <TransactionCardSeparator />
      <TransactionCard />
      <TransactionCardSeparator />
      <TransactionCard />
      <TransactionCardSeparator />
      <TransactionCard />
    </View>
  );
};

export default TransactionsPage;

const styles = StyleSheet.create({});

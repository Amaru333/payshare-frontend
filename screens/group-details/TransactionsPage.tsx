import { StyleSheet, View } from "react-native";
import React from "react";
import TransactionCard from "./TransactionCard";
import TransactionCardSeparator from "./TransactionCardSeparator";
import { TransactionInterface } from "@/constants/CommonInterfaces";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/slices/userSlice";

interface TransactionDataProps {
  data: TransactionInterface[];
}

const TransactionsPage = ({ data }: TransactionDataProps) => {
  const currentUser = useSelector(getUser);
  return (
    <View style={{ padding: 20, paddingBottom: 100 }}>
      {data?.map((transaction, idx) => (
        <View key={idx}>
          <TransactionCard
            currentUser={currentUser}
            paidBy={transaction.paid_by._id === currentUser._id ? "You" : transaction.paid_by.full_name}
            amount={transaction.total_cost}
            transactionName={transaction.transaction_name}
            createdAt={transaction.createdAt}
            id={transaction._id}
            split={transaction.split}
            type={transaction.type}
          />
          {idx !== data.length - 1 && <TransactionCardSeparator />}
        </View>
      ))}
    </View>
  );
};

export default TransactionsPage;

const styles = StyleSheet.create({});

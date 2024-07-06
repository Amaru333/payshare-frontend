import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashboardContainer from "@/components/DashboardContainer";
import Header from "./Header";
import HistoryCard from "./HistoryCard";

const HistoryPage = () => {
  const transaction_data = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <DashboardContainer>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        data={transaction_data}
        renderItem={({ item }) => <HistoryCard />}
        keyExtractor={(item, idx) => idx.toString()}
        ListHeaderComponent={<Header />}
        ListHeaderComponentStyle={{ paddingVertical: 20 }}
        ListFooterComponent={() => <View style={{ marginBottom: 100 }} />}
        ItemSeparatorComponent={() => <View style={{ marginTop: 24 }} />}
      />
    </DashboardContainer>
  );
};

export default HistoryPage;

const styles = StyleSheet.create({});

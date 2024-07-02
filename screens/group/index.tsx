import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import DashboardContainer from "@/components/DashboardContainer";
import SummaryCard from "./SummaryCard";
import { group_data } from "@/constants/DummyData";
import Header from "./Header";

const GroupPage = () => {
  return (
    <DashboardContainer>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        data={group_data}
        renderItem={({ item }) => <SummaryCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Header />}
        ListHeaderComponentStyle={{ paddingVertical: 20 }}
        ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
        ItemSeparatorComponent={() => <View style={{ marginTop: 20 }} />}
      />
    </DashboardContainer>
  );
};

export default GroupPage;

const styles = StyleSheet.create({});

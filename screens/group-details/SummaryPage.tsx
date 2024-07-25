import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SummaryCard from "./SummaryCard";

interface SummaryPageProps {
  data: any;
}

const SummaryPage = ({ data }: SummaryPageProps) => {
  return (
    <View style={{ paddingHorizontal: 20, display: "flex", gap: 20, paddingBottom: 80 }}>
      {data?.map((item: any, idx: number) => item.amount > 0 && <SummaryCard key={idx} {...item} />)}
      {/* <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard /> */}
    </View>
  );
};

export default SummaryPage;

const styles = StyleSheet.create({});

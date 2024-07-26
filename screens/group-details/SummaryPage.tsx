import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SummaryCard from "./SummaryCard";

interface SummaryPageProps {
  data: any;
  groupID: string;
}

const SummaryPage = ({ data, groupID }: SummaryPageProps) => {
  return <View style={{ paddingHorizontal: 0, display: "flex", gap: 20, paddingBottom: 80 }}>{data?.map((item: any, idx: number) => item.amount > 0 && <SummaryCard key={idx} groupID={groupID} {...item} />)}</View>;
};

export default SummaryPage;

const styles = StyleSheet.create({});

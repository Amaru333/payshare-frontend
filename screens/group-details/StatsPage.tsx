import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatsSummary from "./StatsSummary";
import GroupSummary from "./GroupSummary";

const StatsPage = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <StatsSummary />
      <GroupSummary />
    </View>
  );
};

export default StatsPage;

const styles = StyleSheet.create({});

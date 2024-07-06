import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashboardContainer from "@/components/DashboardContainer";
import { ThemedText } from "@/components/ThemedText";
import UIButton from "@/widgets/UIButton";
import { convertToCurrency } from "@/functions/currency";
import SummaryCard from "./SummaryCard";
import SummaryPage from "./SummaryPage";
import TransactionsPage from "./TransactionsPage";
import MembersPage from "./MembersPage";
import StatsPage from "./StatsPage";

const GroupDetailsPage = () => {
  const tabs = ["Summary", "Transactions", "Members", "Stats"];
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  return (
    <DashboardContainer>
      <View style={{ padding: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 32, lineHeight: 40 }}>Roommates</ThemedText>
          <View>
            <UIButton textStyle={{ fontSize: 12, fontFamily: "Poppins300", lineHeight: 18 }} style={{ width: "auto", paddingHorizontal: 10, borderRadius: 100 }}>
              Add Transaction
            </UIButton>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 24 }}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <ThemedText style={{ fontSize: 12, fontFamily: "Poppins600" }}>You owe</ThemedText>
            <ThemedText style={{ color: "#AB41FF", fontSize: 24, fontFamily: "Poppins600", lineHeight: 30 }}>{convertToCurrency(25000, "USD")}</ThemedText>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <ThemedText style={{ fontSize: 12, fontFamily: "Poppins600" }}>You've lent</ThemedText>
            <ThemedText style={{ color: "#543BED", fontSize: 24, fontFamily: "Poppins600", lineHeight: 30 }}>{convertToCurrency(25000, "USD")}</ThemedText>
          </View>
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            {tabs.map((tab, index) => (
              <UIButton key={index} onPress={() => setSelectedTab(tab)} textStyle={styles.buttonTextStyle} style={[styles.buttonStyle, { marginLeft: index === 0 ? 20 : 0, marginRight: index === tabs.length - 1 ? 20 : 0, backgroundColor: selectedTab === tab ? "#AB41FF" : "rgba(171,65,255,0.2)" }]}>
                {tab}
              </UIButton>
            ))}
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
        {selectedTab === "Summary" && <SummaryPage />}
        {selectedTab === "Transactions" && <TransactionsPage />}
        {selectedTab === "Members" && <MembersPage />}
        {selectedTab === "Stats" && <StatsPage />}
      </ScrollView>
    </DashboardContainer>
  );
};

export default GroupDetailsPage;

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 12,
    fontFamily: "Poppins300",
    lineHeight: 18,
  },
  buttonStyle: {
    width: "auto",
    paddingHorizontal: 10,
    borderRadius: 100,
    paddingVertical: 4,
  },
});

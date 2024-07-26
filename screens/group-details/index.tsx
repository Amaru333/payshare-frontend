import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import DashboardContainer from "@/components/DashboardContainer";
import { ThemedText } from "@/components/ThemedText";
import UIButton from "@/widgets/UIButton";
import { convertToCurrency } from "@/functions/currency";
import SummaryPage from "./SummaryPage";
import TransactionsPage from "./TransactionsPage";
import MembersPage from "./MembersPage";
import StatsPage from "./StatsPage";
import { router, useLocalSearchParams } from "expo-router";
import httpRequest from "@/utils/httpRequest";
import { GROUP_API, TRANSACTION_API } from "@/constants/APIConstants";

interface ParamProps {
  id: string;
}

const GroupDetailsPage = () => {
  const scrollRef = React.createRef<ScrollView>();
  const { id } = useLocalSearchParams();

  const [groupDetails, setGroupDetails] = React.useState({
    group_name: "",
    members: [],
  });
  const [transactionsData, setTransactionsData] = React.useState([]);
  const [splitBalances, setSplitBalances] = React.useState([]);
  const [splitPerPersonData, setSplitPerPersonData] = React.useState<any>([]);

  const scrollTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  const tabs = ["Summary", "Transactions", "Members", "Stats"];
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  useEffect(() => {
    httpRequest
      .get(GROUP_API.GET_DATA_BY_ID + "/" + id)
      .then((res) => {
        setGroupDetails(res.data);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
    httpRequest
      .get(GROUP_API.GET_SPLIT_BALANCES + "/" + id)
      .then((res) => {
        setSplitBalances(res.data);
        const clonedArray = JSON.parse(JSON.stringify(res.data));
        let newArray = [];
        let positiveBalances = clonedArray.filter((acc: any) => acc?.amount >= 0);
        let negativeBalances = clonedArray.filter((acc: any) => acc?.amount < 0);

        while (positiveBalances.length > 0 && negativeBalances.length > 0) {
          let posBalance = JSON.parse(JSON.stringify(positiveBalances[0]));
          let negBalance = JSON.parse(JSON.stringify(negativeBalances[0]));
          const obj = {
            paid_to: posBalance.user,
            paid_by: negBalance.user,
            amount: Math.min(posBalance.amount, Math.abs(negBalance.amount)),
          };
          newArray.push(obj);
          if (posBalance.amount === Math.abs(negBalance.amount)) {
            positiveBalances.shift();
            negativeBalances.shift();
          } else if (posBalance.amount > Math.abs(negBalance.amount)) {
            positiveBalances[0].amount -= Math.abs(negBalance.amount);
            negativeBalances.shift();
          } else {
            negativeBalances[0].amount += posBalance.amount;
            positiveBalances.shift();
          }
        }
        setSplitPerPersonData(newArray);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
    httpRequest
      .get(TRANSACTION_API.BASE + "/" + id)
      .then((res) => {
        setTransactionsData(res.data);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  }, []);

  console.log(splitPerPersonData, "groupDetails");

  return (
    <DashboardContainer>
      <View style={{ padding: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <ThemedText numberOfLines={1} style={{ fontFamily: "Poppins600", fontSize: 24, lineHeight: 40 }}>
              {groupDetails.group_name}
            </ThemedText>
          </View>
          <View style={{ width: 110 }}>
            <UIButton onPress={() => router.navigate("/dashboard/create/new-transaction/" + id)} textStyle={{ fontSize: 10, fontFamily: "Poppins300", lineHeight: 18 }} style={{ width: "auto", paddingHorizontal: 10, borderRadius: 100 }}>
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
              <UIButton
                key={index}
                onPress={() => {
                  setSelectedTab(tab);
                  scrollTop();
                }}
                textStyle={styles.buttonTextStyle}
                style={[styles.buttonStyle, { marginLeft: index === 0 ? 20 : 0, marginRight: index === tabs.length - 1 ? 20 : 0, backgroundColor: selectedTab === tab ? "#AB41FF" : "rgba(171,65,255,0.2)" }]}
              >
                {tab}
              </UIButton>
            ))}
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false} ref={scrollRef}>
        {selectedTab === "Summary" && <SummaryPage data={splitPerPersonData} groupID={id as string} />}
        {selectedTab === "Transactions" && <TransactionsPage data={transactionsData} />}
        {selectedTab === "Members" && <MembersPage splitData={splitPerPersonData} splitBalances={splitBalances} />}
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

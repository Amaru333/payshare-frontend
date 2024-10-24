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
import { useDispatch, useSelector } from "react-redux";
import { getGroupSplitByID, getSplitBalancesByID, getTransactionsByGroupID, setTransactionRedux } from "@/redux/slices/transactionSlice";
import { addGroupRedux, getGroupDetailsByID } from "@/redux/slices/groupSlice";

const GroupDetailsPage = () => {
  const dispatch = useDispatch();

  const scrollRef = React.createRef<ScrollView>();
  const { id } = useLocalSearchParams();

  const transactionsReduxData = useSelector(getTransactionsByGroupID(id as string));
  const splitPerPersonReduxData = useSelector(getGroupSplitByID(id as string));
  const splitBalanceReduxData = useSelector(getSplitBalancesByID(id as string));

  const groupDetailsReduxData = useSelector(getGroupDetailsByID(id as string));

  const scrollTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  const tabs = ["Summary", "Transactions", "Members", "Stats"];
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  useEffect(() => {
    if (!groupDetailsReduxData) {
      httpRequest
        .get(GROUP_API.GET_DATA_BY_ID + "/" + id)
        .then((res) => {
          console.log("REACHED DUPLICATE");
          dispatch(addGroupRedux(res.data));
        })
        .catch((err) => {
          console.log(err, "ERROR");
        });
    }
    if (!transactionsReduxData) {
      httpRequest
        .get(TRANSACTION_API.BASE + "/" + id)
        .then((res) => {
          dispatch(setTransactionRedux({ groupID: id, transactions: res.data }));
        })
        .catch((err) => {
          console.log(err, "ERROR");
        });
    }
  }, []);

  return (
    <DashboardContainer>
      <View style={{ padding: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <ThemedText numberOfLines={1} style={{ fontFamily: "Poppins600", fontSize: 24, lineHeight: 40 }}>
              {groupDetailsReduxData?.group_name}
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
        {selectedTab === "Summary" && <SummaryPage data={splitPerPersonReduxData} groupID={id as string} />}
        {selectedTab === "Transactions" && <TransactionsPage data={transactionsReduxData?.transactions} />}
        {selectedTab === "Members" && <MembersPage splitData={splitPerPersonReduxData} splitBalances={splitBalanceReduxData} />}
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

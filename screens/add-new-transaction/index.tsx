import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import DashboardContainer from "@/components/DashboardContainer";
import { ThemedText } from "@/components/ThemedText";
import { router, useLocalSearchParams } from "expo-router";
import UIInput from "@/widgets/UIInput";
import UIDropdown from "@/widgets/UIDropdown";
import UIButton from "@/widgets/UIButton";
import UICheckbox from "@/widgets/UICheckbox";
import { convertToCurrency } from "@/functions/currency";
import httpRequest from "@/utils/httpRequest";
import { GROUP_API, TRANSACTION_API } from "@/constants/APIConstants";
import { UserInterface } from "@/constants/CommonInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/redux/slices/userSlice";
import { addTransactionToGroup } from "@/redux/slices/transactionSlice";

interface IndividualCostInterface {
  name: string;
  value: string;
  cost: string;
  selected: boolean;
}

const AddTransactionPage = () => {
  const dispatch = useDispatch();

  const { id } = useLocalSearchParams();
  const currentUserDetails = useSelector(getUser);

  const [groupDetails, setGroupDetails] = React.useState();
  const [isAllSelected, setIsAllSelected] = React.useState(true);
  const [individualCost, setIndividualCost] = React.useState<IndividualCostInterface[]>([]);
  useEffect(() => {
    httpRequest
      .get(GROUP_API.GET_DATA_BY_ID + "/" + id)
      .then((res) => {
        setGroupDetails(res.data);
        setIndividualCost(() =>
          res.data.members.map((member: UserInterface) => ({
            name: member.full_name,
            value: member._id,
            cost: "0",
            selected: true,
          }))
        );
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  }, []);

  const totalSplitAddedCost = individualCost.reduce((acc, user) => acc + parseFloat(user.cost), 0).toFixed(2);
  const [data, setData] = React.useState({
    transaction_name: "",
    paidBy: currentUserDetails?._id || "",
    totalCost: "0",
  });
  useEffect(() => {
    const totalSelected = individualCost.filter((user) => user.selected).length;
    const costPerPerson = (parseFloat(data.totalCost || "0") / totalSelected).toFixed(2);
    const lastPersonCost = (parseFloat(data.totalCost || "0") - parseFloat(costPerPerson) * (totalSelected - 1)).toFixed(2);
    setIndividualCost(() => {
      let flagged = true;
      return individualCost.map((user) => {
        if (user.selected) {
          if (flagged) {
            flagged = false;
            return { ...user, cost: lastPersonCost };
          }
          return { ...user, cost: costPerPerson };
        } else {
          return { ...user, cost: "0" };
        }
      });
    });
  }, [data.totalCost, individualCost.map((user) => user.selected).join(",")]);

  const onSubmit = () => {
    let submitData = {
      group: id,
      transaction_name: data.transaction_name,
      paid_by: data.paidBy,
      total_cost: parseFloat(data.totalCost).toFixed(2),
      split: individualCost.map((user) => {
        return { user: user.value, amount: parseFloat(user.cost).toFixed(2) };
      }),
      type: "transaction",
    };
    httpRequest.post(TRANSACTION_API.BASE, submitData).then((res) => {
      console.log(res, "RESPONSE _ADD TRANSACTION");
      dispatch(addTransactionToGroup({ groupID: id, transaction: res.data }));
      setData({
        transaction_name: "",
        paidBy: currentUserDetails?._id || "",
        totalCost: "0",
      });
      router.navigate("/dashboard/group/" + id);
    });
  };
  return (
    <DashboardContainer>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <ThemedText style={{ fontSize: 32, fontFamily: "Poppins600", lineHeight: 40 }}>Add Transaction</ThemedText>
        <View style={{ display: "flex", rowGap: 10, marginTop: 20 }}>
          <UIInput label="Transaction Name" value={data.transaction_name} onChangeText={(e) => setData({ ...data, transaction_name: e })} />
          <UIInput label="Total Cost" keyboardType="decimal-pad" value={data.totalCost} onChangeText={(e) => setData({ ...data, totalCost: e })} selectTextOnFocus={true} />
          <UIDropdown label="Paid By" items={individualCost} value={data.paidBy} onChange={(e) => setData({ ...data, paidBy: e.value })} searchable />
          <View>
            <ThemedText style={{ fontSize: 12 }}>Split For</ThemedText>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <UICheckbox
                size={13}
                selected={isAllSelected}
                label="Select All"
                labelStyle={{ fontSize: 12 }}
                onPress={(val) => {
                  setIsAllSelected(val);
                  setIndividualCost(
                    individualCost.map((u) => {
                      return { ...u, selected: val };
                    })
                  );
                }}
              />
              <ThemedText style={{ fontSize: 12 }}>Individual Split</ThemedText>
            </View>
            <View style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
              {individualCost.map((user, idx) => (
                <View key={idx} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <UICheckbox
                      selected={user.selected}
                      onPress={(val) => {
                        const numUsersSelected = val === true ? individualCost.filter((u) => u.selected).length + 1 : individualCost.filter((u) => u.selected).length - 1;
                        if (numUsersSelected === individualCost.length) {
                          setIsAllSelected(true);
                        } else {
                          setIsAllSelected(false);
                        }
                        setIndividualCost(
                          individualCost.map((u, i) => {
                            if (i === idx) {
                              return { ...u, selected: val };
                            } else {
                              return u;
                            }
                          })
                        );
                      }}
                      label={user.name}
                    />
                  </View>
                  <View>
                    <TextInput style={{ backgroundColor: "white", fontSize: 14, padding: 8, borderRadius: 8, flex: 1, width: 80 }} value={user.cost} />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
          <ThemedText style={{ fontSize: 14, fontFamily: "Poppins600" }}>
            Total {convertToCurrency(parseFloat(totalSplitAddedCost), "USD")} out of {convertToCurrency(parseFloat(data.totalCost), "USD")} split
          </ThemedText>
        </View>
        <UIButton style={{ marginTop: 50 }} onPress={onSubmit}>
          SAVE
        </UIButton>
      </ScrollView>
    </DashboardContainer>
  );
};

export default AddTransactionPage;

const styles = StyleSheet.create({});

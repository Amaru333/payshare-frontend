import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import DashboardContainer from "@/components/DashboardContainer";
import { ThemedText } from "@/components/ThemedText";
import { useGlobalSearchParams } from "expo-router";
import UIInput from "@/widgets/UIInput";
import UIDropdown from "@/widgets/UIDropdown";
import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from "@gluestack-ui/themed";
import UIButton from "@/widgets/UIButton";
import UICheckbox from "@/widgets/UICheckbox";
import { convertToCurrency } from "@/functions/currency";

const AddTransactionPage = () => {
  const glob = useGlobalSearchParams();

  const [isAllSelected, setIsAllSelected] = React.useState(true);

  const [individualCost, setIndividualCost] = React.useState([
    {
      name: "Person 1",
      value: "person1",
      cost: "0",
      selected: true,
    },
    {
      name: "Person 2",
      value: "person2",
      cost: "0",
      selected: true,
    },
    {
      name: "Person 3",
      value: "person3",
      cost: "0",
      selected: true,
    },
  ]);
  const totalSplitAddedCost = individualCost.reduce((acc, user) => acc + parseFloat(user.cost), 0).toFixed(2);
  const [data, setData] = React.useState({
    paidBy: individualCost[0].value,
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
  return (
    <DashboardContainer>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <ThemedText style={{ fontSize: 32, fontFamily: "Poppins600", lineHeight: 40 }}>Add Transaction</ThemedText>
        <View style={{ display: "flex", rowGap: 10, marginTop: 20 }}>
          <UIInput label="Transaction Name" />
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
            Total {convertToCurrency(parseFloat(totalSplitAddedCost), "USD")} out of ${convertToCurrency(parseFloat(data.totalCost), "USD")} split
          </ThemedText>
        </View>
        <UIButton style={{ marginTop: 50 }}>SAVE</UIButton>
      </ScrollView>
    </DashboardContainer>
  );
};

export default AddTransactionPage;

const styles = StyleSheet.create({});

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import UIInput from "@/widgets/UIInput";
import UIDropdown from "@/widgets/UIDropdown";
import { currencies } from "@/constants/Currencies";
import { ThemedText } from "@/components/ThemedText";
import UIButton from "@/widgets/UIButton";
import { router } from "expo-router";

const InputContainer = () => {
  const [data, setData] = React.useState<any>({
    currency: currencies[1].value,
    members: [],
  });
  const [memberName, setMemberName] = React.useState("");
  return (
    <View style={{ display: "flex", rowGap: 16, marginTop: 10 }}>
      <UIInput label="Group Name" />
      <UIDropdown label="Default Currency" items={currencies} onChange={(item) => setData({ ...data, currency: item.value })} value={data.currency} searchable />
      <View>
        <ThemedText style={{ fontSize: 12 }}>Members (Username or Email ID)</ThemedText>
        {data?.members?.map((member: string, idx: number) => (
          <View key={idx} style={{ display: "flex", flexDirection: "row", columnGap: 10, alignItems: "center", marginBottom: 10 }}>
            <ThemedText style={{ color: "#999", flex: 1 }}>{member}</ThemedText>
            <View>
              <UIButton
                theme="secondary"
                textStyle={{ fontSize: 12 }}
                style={{ paddingHorizontal: 20 }}
                onPress={() => {
                  const members = data.members.filter((m: string) => m !== member);
                  setData({ ...data, members });
                }}
              >
                REMOVE
              </UIButton>
            </View>
          </View>
        ))}
        <View style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
          <TextInput style={{ backgroundColor: "white", fontSize: 14, padding: 8, borderRadius: 8, flex: 1 }} value={memberName} onChangeText={(e) => setMemberName(e)} />
          <View>
            <UIButton
              textStyle={{ fontSize: 12 }}
              onPress={() => {
                setData({ ...data, members: [...data.members, memberName] });
                setMemberName("");
              }}
            >
              ADD
            </UIButton>
          </View>
        </View>
      </View>
      <UIButton style={{ marginTop: 50 }} onPress={() => router.navigate("/dashboard/create/new-transaction/1234")}>
        CREATE
      </UIButton>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({});

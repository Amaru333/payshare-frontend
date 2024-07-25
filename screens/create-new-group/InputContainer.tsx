import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import UIInput from "@/widgets/UIInput";
import UIDropdown from "@/widgets/UIDropdown";
import { currencies } from "@/constants/Currencies";
import { ThemedText } from "@/components/ThemedText";
import UIButton from "@/widgets/UIButton";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { getUser, getUserDefaultCurrency } from "@/redux/slices/userSlice";
import httpRequest from "@/utils/httpRequest";
import { GROUP_API, USER_API } from "@/constants/APIConstants";
import { useToast } from "@gluestack-ui/themed";
import UIToast from "@/widgets/UIToast";

interface GroupDataProps {
  group_name: string;
  currency: string;
}

interface MemberDetails {
  // email: string;
  // full_name: string;
  username: string;
  _id: string;
}

const InputContainer = () => {
  const toast = useToast();
  const defaultCurrency = useSelector(getUserDefaultCurrency);
  const currentUser = useSelector(getUser);

  const [memberName, setMemberName] = React.useState("");
  const [memberList, setMemberList] = React.useState<MemberDetails[] | []>([]);
  const [data, setData] = React.useState<GroupDataProps>({
    group_name: "",
    currency: defaultCurrency,
  });

  const onCreate = () => {
    const memberIDList = memberList.map((m: MemberDetails) => m._id);
    httpRequest
      .post(GROUP_API.BASE, { ...data, members: [currentUser?._id, ...memberIDList] })
      .then((res) => {
        console.log(res.data);
        router.navigate("/dashboard/create/new-transaction/" + res.data._id);
      })
      .catch((err) => {
        console.log(err);
        toast.show({
          render: () => <UIToast id="group" message="Group creation failed" action="error" />,
        });
      });
  };
  return (
    <View style={{ display: "flex", rowGap: 16, marginTop: 10 }}>
      <UIInput label="Group Name" value={data.group_name} onChangeText={(e) => setData({ ...data, group_name: e })} />
      <UIDropdown label="Default Currency" items={currencies} onChange={(item) => setData({ ...data, currency: item.value })} value={data.currency} searchable />
      <View>
        <ThemedText style={{ fontSize: 12 }}>Members (Username or Email ID)</ThemedText>
        <ThemedText style={{ color: "#999", flex: 1, marginVertical: 10 }}>{currentUser?.username} (You)</ThemedText>
        {memberList.length > 0 &&
          memberList?.map((member: MemberDetails, idx: number) => (
            <View key={idx} style={{ display: "flex", flexDirection: "row", columnGap: 10, alignItems: "center", marginBottom: 10 }}>
              <ThemedText style={{ color: "#999", flex: 1 }}>{member.username}</ThemedText>
              <View>
                <UIButton
                  theme="secondary"
                  textStyle={{ fontSize: 12 }}
                  style={{ paddingHorizontal: 20 }}
                  onPress={() => {
                    const members = memberList.filter((m: MemberDetails) => m._id !== member._id);
                    setMemberList(members);
                    // const members = data.members.filter((m: string) => m !== member);
                    // setData({ ...data, members });
                  }}
                >
                  REMOVE
                </UIButton>
              </View>
            </View>
          ))}
        <View style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
          <TextInput style={{ backgroundColor: "white", fontSize: 14, padding: 8, borderRadius: 8, flex: 1 }} autoCapitalize="none" value={memberName} onChangeText={(e) => setMemberName(e)} />
          <View>
            <UIButton
              textStyle={{ fontSize: 12 }}
              onPress={() => {
                if (memberList.find((m: MemberDetails) => m.username === memberName)) {
                  toast.show({
                    render: () => <UIToast id="member" message="User already added" action="error" />,
                  });
                  return;
                }
                if (memberName === currentUser.username || memberName === currentUser.email) {
                  toast.show({
                    render: () => <UIToast id="member" message="You cannot add yourself" action="error" />,
                  });
                  return;
                }
                httpRequest
                  .get(USER_API.FIND_USER + "/" + memberName)
                  .then((res) => {
                    console.log(res.data, "MEMBER");
                    setMemberList((prev: any) => [...prev, res.data]);
                    setMemberName("");
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.show({
                      render: () => <UIToast id="member" message="User not found" action="error" />,
                    });
                  });
                // setData({ ...data, members: [...data.members, memberName] });
                // setMemberName("");
              }}
            >
              ADD
            </UIButton>
          </View>
        </View>
      </View>
      <UIButton
        style={{ marginTop: 50 }}
        onPress={
          // () => router.navigate("/dashboard/create/new-transaction/1234")
          onCreate
        }
      >
        CREATE
      </UIButton>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({});

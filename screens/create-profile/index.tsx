import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import UIInput from "@/widgets/UIInput";
import UIButton from "@/widgets/UIButton";

import UIDropdown from "@/widgets/UIDropdown";
import { currencies } from "@/constants/Currencies";
import { router, useLocalSearchParams } from "expo-router";
import httpRequest from "@/utils/httpRequest";
import { USER_API } from "@/constants/APIConstants";
import { useToast } from "@gluestack-ui/themed";
import UIToast from "@/widgets/UIToast";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

interface ParamsInterface {
  full_name?: string;
  username?: string;
  phone_number?: string;
  default_currency?: string;
}

const CreateProfilePage = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { full_name, username, phone_number, default_currency }: ParamsInterface = useLocalSearchParams();
  const [data, setData] = React.useState({
    full_name: full_name,
    username: username,
    phone_number: phone_number,
    default_currency: default_currency || currencies[1].value,
  });

  const updateProfile = () => {
    httpRequest
      .put(USER_API.BASE, data)
      .then((res) => {
        console.log(res);
        dispatch(setUser(res.data));
        router.replace("/(tabs)/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.show({
          render: () => <UIToast id="login" message={err?.response?.data?.message} action="error" />,
        });
      });
  };
  return (
    <SafeAreaView>
      <View style={{ margin: 24 }}>
        <ThemedText style={{ fontSize: 24, lineHeight: 40 }}>Complete your profile</ThemedText>
        <View style={{ marginTop: 48, display: "flex", rowGap: 20 }}>
          <UIInput label="Full Name" placeholder="Full Name" value={data.full_name} onChangeText={(e) => setData({ ...data, full_name: e })} />
          <UIInput label="Username" placeholder="username" value={data.username} onChangeText={(e) => setData({ ...data, username: e })} />
          <UIInput label="Phone Number" placeholder="+17010000000" inputMode="tel" value={data.phone_number} onChangeText={(e) => setData({ ...data, phone_number: e })} />
          <UIDropdown label="Default Currency (can be changed later)" items={currencies} onChange={(item) => setData({ ...data, default_currency: item.value })} value={data.default_currency} searchable />
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 60 }}>
          <UIButton style={{ width: "50%" }} onPress={() => updateProfile()}>
            Save
          </UIButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateProfilePage;

const styles = StyleSheet.create({});

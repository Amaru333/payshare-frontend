import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import UIInput from "@/widgets/UIInput";
import UIButton from "@/widgets/UIButton";

import UIDropdown from "@/widgets/UIDropdown";
import { currencies } from "@/constants/Currencies";
import { router } from "expo-router";

const CreateProfilePage = () => {
  const [data, setData] = React.useState({
    fullName: "",
    username: "",
    phoneNumber: "",
    currency: currencies[1].value,
  });
  console.log(data.currency);
  return (
    <SafeAreaView>
      <View style={{ margin: 24 }}>
        <ThemedText style={{ fontSize: 24, lineHeight: 40 }}>Complete your profile</ThemedText>
        <View style={{ marginTop: 48, display: "flex", rowGap: 20 }}>
          <UIInput label="Full Name" placeholder="Full Name" />
          <UIInput label="Username" placeholder="username" />
          <UIInput label="Phone Number" placeholder="+17010000000" inputMode="tel" />
          <UIDropdown label="Default Currency (can be changed later)" items={currencies} onChange={(item) => setData({ ...data, currency: item.value })} value={data.currency} searchable />
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 60 }}>
          <UIButton style={{ width: "50%" }} onPress={() => router.push("/(tabs)/dashboard")}>
            Save
          </UIButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateProfilePage;

const styles = StyleSheet.create({});

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DashboardContainer from "@/components/DashboardContainer";
import { ThemedText } from "@/components/ThemedText";
import UIInput from "@/widgets/UIInput";
import UIDropdown from "@/widgets/UIDropdown";
import { currencies } from "@/constants/Currencies";
import UIButton from "@/widgets/UIButton";

const AccountPage = () => {
  const [data, setData] = React.useState({
    fullName: "",
    username: "",
    phoneNumber: "",
    currency: currencies[1].value,
  });
  return (
    <DashboardContainer>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <ThemedText style={{ fontSize: 32, fontFamily: "Poppins600", lineHeight: 40, marginBottom: 20 }}>Account</ThemedText>
        <View style={{ display: "flex", rowGap: 20 }}>
          <UIInput label="Email" value="username@email.com" disabled />
          <UIInput label="Username" value="username" disabled />
          <UIInput label="Name" value="John Doe" />
          <UIInput label="Phone" value="+1234567890" />
          <UIDropdown label="Default Currency" items={currencies} onChange={(item) => setData({ ...data, currency: item.value })} value={data.currency} searchable />
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 40 }}>
            <UIButton style={{ width: "50%" }}>Save</UIButton>
          </View>
        </View>
      </ScrollView>
    </DashboardContainer>
  );
};

export default AccountPage;

const styles = StyleSheet.create({});

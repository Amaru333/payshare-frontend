import { View, Text, ScrollView } from "react-native";
import React from "react";
import DashboardContainer from "@/components/DashboardContainer";
import Header from "./Header";
import InputContainer from "./InputContainer";

const CreateNewGroupPage = () => {
  return (
    <DashboardContainer>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Header />
        <InputContainer />
      </ScrollView>
    </DashboardContainer>
  );
};

export default CreateNewGroupPage;

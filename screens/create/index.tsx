import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import DashboardContainer from "@/components/DashboardContainer";
import GradientCard from "@/components/GradientCard";
import { ThemedText } from "@/components/ThemedText";
import IndividualTransactionActionSheet from "./IndividualTransactionActionSheet";
import { router } from "expo-router";

const CreatePage = () => {
  const [showIndividualTransactionSheet, setShowIndividualTransactionSheet] = React.useState(false);
  return (
    <DashboardContainer>
      <IndividualTransactionActionSheet isOpen={showIndividualTransactionSheet} onClose={() => setShowIndividualTransactionSheet(false)} />
      <View style={{ display: "flex", flexDirection: "row", padding: 20, marginTop: 12, gap: 20 }}>
        <GradientCard>
          <TouchableOpacity activeOpacity={0.8} style={{ paddingHorizontal: 20, paddingVertical: 32 }}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16, lineHeight: 24 }}>Add group transaction</ThemedText>
          </TouchableOpacity>
        </GradientCard>
        <GradientCard>
          <TouchableOpacity activeOpacity={0.8} style={{ paddingHorizontal: 20, paddingVertical: 32 }} onPress={() => setShowIndividualTransactionSheet(true)}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16, lineHeight: 24 }}>Add individual transaction</ThemedText>
          </TouchableOpacity>
        </GradientCard>
      </View>
      <View style={{ display: "flex", flexDirection: "row", paddingHorizontal: 20, gap: 20 }}>
        <GradientCard>
          <TouchableOpacity activeOpacity={0.8} style={{ paddingHorizontal: 20, paddingVertical: 32 }} onPress={() => router.navigate("/dashboard/create/new-group")}>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 16, lineHeight: 24 }}>Create new group</ThemedText>
          </TouchableOpacity>
        </GradientCard>
        <View style={{ flex: 1 }}></View>
      </View>
    </DashboardContainer>
  );
};

export default CreatePage;

const styles = StyleSheet.create({});

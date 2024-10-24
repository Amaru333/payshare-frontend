import { StyleSheet, View } from "react-native";
import React from "react";
import UIButton from "@/widgets/UIButton";
import MembersCard from "./MembersCard";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/slices/userSlice";

interface MembersPageProps {
  splitData: any;
  splitBalances: any[];
}

const MembersPage = ({ splitData, splitBalances }: MembersPageProps) => {
  const loggedInUser = useSelector(getUser);
  const sortSplitBalances = (splitBalances: any[]) => {
    let currentUser: any = splitBalances.find((member) => member?.user?._id === loggedInUser?._id);
    let otherMembers = splitBalances.filter((member) => member?.user?._id !== loggedInUser?._id);
    otherMembers = otherMembers.sort((a, b) => a?.amount - b?.amount);
    return [currentUser, ...otherMembers];
  };
  console.log(splitBalances, splitData, "SPLIT BALANCES");
  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 100 }}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        <View>
          <UIButton textStyle={styles.buttonTextStyle} style={[styles.buttonStyle]} theme="secondary">
            Add member
          </UIButton>
        </View>
      </View>
      <View style={{ marginTop: 24, display: "flex", gap: 24 }}>
        {sortSplitBalances(splitBalances)?.map((member, idx) => (
          <MembersCard member={member} idx={idx} splitData={splitData} key={idx} />
        ))}
      </View>
    </View>
  );
};

export default MembersPage;

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

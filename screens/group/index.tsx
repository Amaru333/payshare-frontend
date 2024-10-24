import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import DashboardContainer from "@/components/DashboardContainer";
import SummaryCard from "./SummaryCard";
import { group_data } from "@/constants/DummyData";
import Header from "./Header";
import httpRequest from "@/utils/httpRequest";
import { GROUP_API } from "@/constants/APIConstants";
import { GroupData } from "@/constants/CommonInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { addGroupRedux, getGroupDetailsByID, getGroups } from "@/redux/slices/groupSlice";
import { getUser } from "@/redux/slices/userSlice";

const GroupPage = () => {
  const dispatch = useDispatch();

  const [groupData, setGroupData] = React.useState<GroupData[] | []>([]);
  const groups = useSelector(getGroups);

  useEffect(() => {
    const initFunction = async () => {
      try {
        const countGroup = await httpRequest.get(GROUP_API.COUNT);
        // console.log(countGroup, groups, "COUNT GROUP");
        if (countGroup.data > groups.length) {
          const groupData = await httpRequest.get(GROUP_API.BASE);
          dispatch(addGroupRedux(groupData.data));
          setGroupData(groupData.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    initFunction();

    httpRequest
      .get(GROUP_API.BASE)
      .then((res) => {
        setGroupData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(groupData);
  return (
    <DashboardContainer>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
        data={groupData}
        renderItem={({ item }) => <SummaryCard {...item} />}
        keyExtractor={(item) => item._id.toString()}
        ListHeaderComponent={<Header />}
        ListHeaderComponentStyle={{ paddingVertical: 20 }}
        ListFooterComponent={() => <View style={{ marginBottom: 60 }} />}
        ItemSeparatorComponent={() => <View style={{ marginTop: 20 }} />}
      />
    </DashboardContainer>
  );
};

export default GroupPage;

const styles = StyleSheet.create({});

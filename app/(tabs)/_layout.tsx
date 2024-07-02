import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ScrollView } from "react-native";
import { View } from "react-native";
import TabBar from "@/components/TabBar";

import HomeIcon from "@/assets/icons/home.svg";
import HomePurpleIcon from "@/assets/icons/home-purple.svg";
import GroupIcon from "@/assets/icons/group.svg";
import GroupPurpleIcon from "@/assets/icons/group-purple.svg";
import HistoryIcon from "@/assets/icons/history.svg";
import HistoryPurpleIcon from "@/assets/icons/history-purple.svg";
import AccountIcon from "@/assets/icons/profile.svg";
import AccountPurpleIcon from "@/assets/icons/profile-purple.svg";
import CreateIcon from "@/assets/icons/add.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (focused ? <HomePurpleIcon /> : <HomeIcon />),
        }}
      />
      <Tabs.Screen
        name="dashboard/group"
        options={{
          title: "Group",
          tabBarIcon: ({ color, focused }) => (focused ? <GroupPurpleIcon /> : <GroupIcon />),
        }}
      />
      <Tabs.Screen
        name="dashboard/create"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ backgroundColor: "#AB41FF", position: "absolute", bottom: -24, padding: 10, borderRadius: 15 }}>
              <CreateIcon />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard/history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (focused ? <HistoryPurpleIcon /> : <HistoryIcon />),
        }}
      />
      <Tabs.Screen
        name="dashboard/account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (focused ? <AccountPurpleIcon /> : <AccountIcon />),
        }}
      />
    </Tabs>
  );
}

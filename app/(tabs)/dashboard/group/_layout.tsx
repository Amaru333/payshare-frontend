import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const GroupStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="group-details" />
    </Stack>
  );
};

export default GroupStack;

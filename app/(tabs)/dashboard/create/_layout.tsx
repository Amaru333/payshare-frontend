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
      <Stack.Screen name="new-group/index" />
      <Stack.Screen name="new-transaction/[id]/index" />
    </Stack>
  );
};

export default GroupStack;

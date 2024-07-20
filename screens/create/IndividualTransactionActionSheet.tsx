import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from "@gluestack-ui/themed";
import UIInput from "@/widgets/UIInput";
import UIButton from "@/widgets/UIButton";
import { ThemedText } from "@/components/ThemedText";

const person = [
  {
    name: "Person A",
    value: "person_a",
  },
  {
    name: "Person B",
    value: "person_b",
  },
  {
    name: "Person C",
    value: "person_c",
  },
];

interface IndividualTransactionActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const IndividualTransactionActionSheet = ({ isOpen, onClose }: IndividualTransactionActionSheetProps) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} zIndex={999}>
      <KeyboardAvoidingView
        behavior="position"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: "relative",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent zIndex={999} style={{ paddingHorizontal: 16 }}>
          <ActionsheetDragIndicatorWrapper style={{ marginBottom: 20 }}>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <UIInput label="Username / Email Address" theme="dark" />
          <ThemedText style={{ fontSize: 12, color: "#999", marginTop: 8 }}>or</ThemedText>
          <View style={{ width: "100%" }}>
            <ThemedText style={{ fontSize: 12, color: "#000" }}>Select from recents:</ThemedText>
            {person.map((item, idx) => (
              <ActionsheetItem
                key={idx}
                onPress={() => {
                  onClose();
                }}
              >
                <ActionsheetItemText>{item.name}</ActionsheetItemText>
              </ActionsheetItem>
            ))}
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginVertical: 40 }}>
              <UIButton style={{ width: 200 }}>CONTINUE</UIButton>
            </View>
          </View>
        </ActionsheetContent>
      </KeyboardAvoidingView>
    </Actionsheet>
  );
};

export default IndividualTransactionActionSheet;

const styles = StyleSheet.create({});

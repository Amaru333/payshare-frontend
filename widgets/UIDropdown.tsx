import { StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions, KeyboardAvoidingView, Pressable } from "react-native";
import React from "react";
import { UIDropdownProps } from "./widgetTypes";
import { ThemedText } from "@/components/ThemedText";

import { ChevronDownIcon, CloseIcon, Icon } from "@gluestack-ui/themed";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Button, ButtonText } from "@gluestack-ui/themed";

const { width } = Dimensions.get("window");

const UIDropdown = ({ label, items, onChange, value, searchable = false }: UIDropdownProps) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const handleClose = () => setShowActionsheet(false);
  return (
    <View style={styles.container}>
      <ThemedText style={styles.labelStyle}>{label}</ThemedText>
      <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: "white", padding: 12, borderRadius: 8, display: "flex", flexDirection: "row" }} onPress={() => setShowActionsheet(true)}>
        <Text style={{ fontSize: 16, flex: 1 }}>{items.find((item) => item.value === value)?.name}</Text>
        <ChevronDownIcon />
      </TouchableOpacity>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
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
          <ActionsheetContent zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            {searchable && (
              <View style={{ borderWidth: 1, borderColor: "#BBB", width: width - 48, margin: 20, borderRadius: 10, padding: 8, display: "flex", flexDirection: "row", alignItems: "center" }}>
                <TextInput style={{ fontSize: 16, flex: 1 }} placeholder="Search" placeholderTextColor="#999" value={searchText} onChangeText={(val) => setSearchText(val)} inputMode="search" />
                {searchText && (
                  <TouchableOpacity onPress={() => setSearchText("")} style={{ backgroundColor: "#ccc", borderRadius: 20, padding: 2 }} activeOpacity={0.8}>
                    <CloseIcon height="$2.5" width="$2.5" color="white" />
                  </TouchableOpacity>
                )}
              </View>
            )}
            {items
              .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.value.toLowerCase().includes(searchText.toLowerCase()))
              .map((item, idx) => (
                <ActionsheetItem
                  key={idx}
                  onPress={() => {
                    onChange(item);
                    handleClose();
                  }}
                >
                  <ActionsheetItemText>{item.name}</ActionsheetItemText>
                </ActionsheetItem>
              ))}
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
    </View>
  );
};

export default UIDropdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelStyle: {
    fontSize: 12,
  },
});

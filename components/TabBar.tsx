import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { BlurView } from "expo-blur";

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <BlurView style={{ position: "absolute", bottom: 20, left: 20, right: 20, borderRadius: 20, overflow: "hidden" }} tint="systemThinMaterial" intensity={50}>
      <View style={{ display: "flex", flexDirection: "row", paddingVertical: 20, borderRadius: 20, alignItems: "center", justifyContent: "space-between" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}
            >
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: "black", size: 20 })}
            </TouchableOpacity>
          );
        })}
      </View>
    </BlurView>
  );
};

export default TabBar;

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import GradientCard from "@/components/GradientCard";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";
import { UserInterface } from "@/constants/CommonInterfaces";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/slices/userSlice";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import FullPaymentModal from "./FullPaymentModal";
import PartialPaymentModal from "./PartialPaymentModal";
import httpRequest from "@/utils/httpRequest";
import { TRANSACTION_API } from "@/constants/APIConstants";

const { width } = Dimensions.get("window");
const THRESHOLD = width * 0.1;

interface SummaryCardProps {
  amount: number;
  paid_by: UserInterface;
  paid_to: UserInterface;
  groupID: string;
}

const SummaryCard = ({ amount, paid_by, paid_to, groupID }: SummaryCardProps) => {
  const [showFullPaymentModal, setShowFullPaymentModal] = React.useState(false);
  const [showPartialPaymentModal, setShowPartialPaymentModal] = React.useState(false);

  const currentUser = useSelector(getUser);
  const checkUserName = (user: UserInterface) => {
    if (currentUser._id === user._id) {
      return "You";
    } else {
      return user.full_name;
    }
  };
  const owesOrOwe = (user: UserInterface) => {
    if (currentUser._id === user._id) {
      return "owe";
    } else {
      return "owes";
    }
  };

  const translateX = useSharedValue(0);
  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      const fullPayment = event.translationX < -1 * THRESHOLD;
      const partialPayment = event.translationX > THRESHOLD;
      if (fullPayment) {
        runOnJS(setShowFullPaymentModal)(true);
      }
      if (partialPayment) {
        runOnJS(setShowPartialPaymentModal)(true);
      }
      translateX.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const opacityStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < -1 * THRESHOLD || translateX.value > THRESHOLD ? 1 : 0);
    return { opacity };
  });

  const onSettle = async (paid_amount: number) => {
    let submitData = {
      group: groupID,
      transaction_name: "Settle",
      paid_by: paid_by._id,
      total_cost: paid_amount,
      split: { user: paid_to._id, amount: paid_amount },
      type: "settle",
    };
    await httpRequest.post(TRANSACTION_API.BASE, submitData).then((res) => {
      console.log(res, "RESPONSE");
    });
  };

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <FullPaymentModal isOpen={showFullPaymentModal} onClose={() => setShowFullPaymentModal(false)} paidTo={paid_to.full_name} amount={amount} onSubmit={onSettle} />
      <PartialPaymentModal isOpen={showPartialPaymentModal} onClose={() => setShowPartialPaymentModal(false)} paidTo={paid_to.full_name} amount={amount} onSubmit={onSettle} />
      <Animated.View style={[{ height: 56, width: width - 40, position: "absolute", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }, opacityStyle]}>
        <View style={{ left: "8%", justifyContent: "center", alignItems: "center" }}>
          <ThemedText style={{ fontFamily: "Poppins600", fontSize: 20 }}>%</ThemedText>
        </View>
        <View style={{ right: "8%", justifyContent: "center", alignItems: "center" }}>
          <ThemedText style={{ fontFamily: "Poppins600", color: "green" }}>100%</ThemedText>
        </View>
      </Animated.View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[{ width: width - 40 }, rStyle]}>
          <TouchableOpacity activeOpacity={0.8}>
            <GradientCard style={{ height: 56, justifyContent: "center" }}>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
                <ThemedText style={{ fontSize: 14, fontFamily: "Poppins600" }} numberOfLines={1}>
                  {checkUserName(paid_by)} {owesOrOwe(paid_by)} {checkUserName(paid_to)}
                </ThemedText>
                <ThemedText style={{ fontSize: 16, fontFamily: "Poppins600", color: "#AB41FF" }}>{convertToCurrency(amount, "USD")}</ThemedText>
              </View>
            </GradientCard>
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SummaryCard;

const styles = StyleSheet.create({});

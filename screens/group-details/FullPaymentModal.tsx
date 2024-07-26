import React from "react";
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, Icon, CloseIcon, ModalBody, ModalFooter, ButtonText } from "@gluestack-ui/themed";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";
import UIButton from "@/widgets/UIButton";
import { View } from "react-native";

interface FullPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paidTo: string;
  amount: number;
  onSubmit: (paid_amount: number) => Promise<void>;
}

const FullPaymentModal = ({ isOpen, onClose, paidTo, amount, onSubmit }: FullPaymentModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <ThemedText style={{ color: "black", fontSize: 16, fontFamily: "Poppins600" }}>Confirm Payment</ThemedText>
          <ModalCloseButton>
            <Icon as={CloseIcon} size="md" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <ThemedText style={{ color: "black", fontSize: 12 }}>
            Have you completed the payment of <ThemedText style={{ fontFamily: "Poppins600", fontSize: 12, color: "black" }}>{convertToCurrency(amount, "USD")}</ThemedText> to <ThemedText style={{ fontFamily: "Poppins600", fontSize: 12, color: "black" }}>{paidTo}</ThemedText>?
          </ThemedText>
        </ModalBody>
        <ModalFooter>
          <View style={{ display: "flex", flexDirection: "row", columnGap: 20, width: "100%" }}>
            <View>
              <UIButton theme="primary" onPress={() => onSubmit(amount).then(() => onClose())}>
                Yes
              </UIButton>
            </View>
            <View>
              <UIButton theme="secondary" onPress={onClose}>
                No
              </UIButton>
            </View>
          </View>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FullPaymentModal;

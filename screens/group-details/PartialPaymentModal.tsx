import React from "react";
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, Icon, CloseIcon, ModalBody, ModalFooter, ButtonText } from "@gluestack-ui/themed";
import { ThemedText } from "@/components/ThemedText";
import { convertToCurrency } from "@/functions/currency";
import UIButton from "@/widgets/UIButton";
import { TextInput, View } from "react-native";

interface PartialPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paidTo: string;
  amount: number;
  onSubmit: (paid_amount: number) => Promise<void>;
}

const PartialPaymentModal = ({ isOpen, onClose, paidTo, amount, onSubmit }: PartialPaymentModalProps) => {
  const [partialInput, setPartialInput] = React.useState("");
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setPartialInput("");
        onClose();
      }}
      size="md"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <ThemedText style={{ color: "black", fontSize: 16, fontFamily: "Poppins600" }}>Partial Payment</ThemedText>
          <ModalCloseButton>
            <Icon as={CloseIcon} size="md" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <ThemedText style={{ color: "black", fontSize: 12 }}>
            Enter the amount you've paid back to <ThemedText style={{ fontFamily: "Poppins600", fontSize: 12, color: "black" }}>{paidTo}</ThemedText>:
          </ThemedText>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginTop: 10 }}>
            <TextInput value={partialInput} onChangeText={setPartialInput} keyboardType="decimal-pad" style={{ borderWidth: 1, borderColor: "#999", padding: 8, borderRadius: 10, width: 100, fontSize: 12 }} />
            <ThemedText style={{ fontSize: 12, color: "black" }}>of</ThemedText>
            <ThemedText style={{ fontFamily: "Poppins600", fontSize: 12, color: "black" }}>{convertToCurrency(amount, "USD")}</ThemedText>
          </View>
        </ModalBody>
        <ModalFooter>
          <View style={{ display: "flex", flexDirection: "row", columnGap: 20, width: "100%" }}>
            <View>
              <UIButton
                theme="primary"
                disabled={partialInput === ""}
                onPress={() => {
                  partialInput && onSubmit(parseFloat(partialInput)).then(() => onClose());
                }}
              >
                Confirm
              </UIButton>
            </View>
            <View>
              <UIButton
                theme="secondary"
                onPress={() => {
                  setPartialInput("");
                  onClose();
                }}
              >
                Cancel
              </UIButton>
            </View>
          </View>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PartialPaymentModal;

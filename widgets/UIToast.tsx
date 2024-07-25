import React from "react";
import { Toast, ToastDescription, ToastTitle, useToast } from "@gluestack-ui/themed";

interface UIToastProps {
  id: string;
  message: string;
  action?: "error" | "success" | "warning" | "info";
}

const UIToast = ({ id, message, action }: UIToastProps) => {
  const uniqueToastId = "toast-" + id;
  return (
    <Toast nativeID={uniqueToastId} action={action} variant="solid">
      <ToastDescription>{message}</ToastDescription>
    </Toast>
  );
};

export default UIToast;

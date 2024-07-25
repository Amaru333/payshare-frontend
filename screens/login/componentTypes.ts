export interface EmailComponentProps {
  nextPage: () => void;
  email: string;
  setEmail: (email: string) => void;
  loading: boolean;
}
export interface OTPVerificationProps {
  backPage: () => void;
  otp: string;
  setOtp: (otp: string) => void;
  email: string;
  onLogin: () => void;
}

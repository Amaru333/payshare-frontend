import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import httpRequest from "@/utils/httpRequest";
import { USER_API } from "@/constants/APIConstants";
import { setUser } from "@/redux/slices/userSlice";
import { router } from "expo-router";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const authenticateUser = async () => {
      httpRequest
        .get(USER_API.BASE)
        .then((res) => {
          dispatch(setUser(res.data));
          router.replace("/(tabs)/dashboard");
        })
        .catch((err) => {
          router.navigate("/login");
        });
    };
    authenticateUser();
  }, []);
  return children;
};

export default AuthGuard;

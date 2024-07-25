import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const httpRequest = axios.create();

httpRequest.interceptors.request.use(
  async (config) => {
    if (config.params?.auth !== false) {
      const auth = await AsyncStorage.getItem("auth-token");
      if (auth) {
        config.headers["auth-token"] = auth;
      }
    }
    delete config.params?.auth;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpRequest;

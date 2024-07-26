export const BACKEND_URL = "https://c947-2406-7400-70-191b-2c77-9c6d-7244-2dd7.ngrok-free.app";
export const API_URL = `${BACKEND_URL}/api`;

const USER = API_URL + "/user";
const CURRENCY = API_URL + "/currency";
const GROUP = API_URL + "/group";
const TRANSACTION = API_URL + "/transaction";

export const USER_API = {
  BASE: USER,
  SEND_OTP: USER + "/send-otp",
  VERIFY_OTP: USER + "/verify-otp",
  FIND_USER: USER + "/find-user",
};

export const CURRENCY_API = {
  BASE: CURRENCY,
};

export const GROUP_API = {
  BASE: GROUP,
  GET_SPLIT_BALANCES: GROUP + "/balances",
  GET_DATA_BY_ID: GROUP + "/id",
};

export const TRANSACTION_API = {
  BASE: TRANSACTION,
};

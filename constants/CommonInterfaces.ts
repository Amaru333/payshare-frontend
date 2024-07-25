export interface UserInterface {
  default_currency: string;
  email: string;
  full_name: string;
  username: string;
  phone_number: string;
  _id: string;
}
export interface GroupData {
  createdBy: UserInterface;
  currency: string;
  group_name: string;
  members: UserInterface[];
  _id: string;
}

export interface TransactionInterface {
  _id: string;
  createdAt: string;
  group: string;
  transaction_name: string;
  total_cost: number;
  paid_by: UserInterface;
  createdBy: UserInterface;
  split: [{ user: UserInterface; amount: number; _id: string }];
}

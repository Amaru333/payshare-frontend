import { splitGroupBalances, splitPerPersonFunction } from "@/functions/splitFunction";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: [] as Array<any>,
  reducers: {
    setTransactionRedux: (state, action) => {
      state.push({
        groupID: action.payload.groupID,
        transactions: action.payload.transactions,
      });
    },
    addTransactionToGroup: (state, action) => {
      const groupIndex = state.findIndex((transaction: any) => transaction.groupID === action.payload.groupID);
      console.log("groupIndex", groupIndex);
      state[groupIndex].transactions.unshift(action.payload.transaction);
    },
  },
});

export const { setTransactionRedux, addTransactionToGroup } = transactionSlice.actions;

export const getTransactionsByGroupID = (groupID: string) =>
  createSelector(
    (state: any) => state.transaction,
    (transactions) => {
      return transactions.find((transaction: any) => transaction.groupID === groupID);
    }
  );

export const getGroupSplitByID = (groupID: string) =>
  createSelector(
    (state: any) => state.transaction,
    (transactions) => {
      const groupTransaction = transactions.find((transaction: any) => transaction.groupID === groupID);
      const splitBalances = splitGroupBalances(groupTransaction?.transactions);
      const splitPerPerson = splitPerPersonFunction(splitBalances);
      return splitPerPerson;
    }
  );

export const getSplitBalancesByID = (groupID: string) =>
  createSelector(
    (state: any) => state.transaction,
    (transactions) => {
      const groupTransaction = transactions.find((transaction: any) => transaction.groupID === groupID);
      const splitBalances = splitGroupBalances(groupTransaction?.transactions);
      return splitBalances;
    }
  );

export default transactionSlice.reducer;

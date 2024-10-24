import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const groupSlice = createSlice({
  name: "group",
  initialState: {
    groupsList: [],
  } as any,
  reducers: {
    addGroupRedux: (state, action) => {
      state.groupsList.push(...action.payload);
    },
  },
});

export const { addGroupRedux } = groupSlice.actions;

export const getGroupDetailsByID = (groupID: string) =>
  createSelector(
    (state: any) => state.group,
    (group) => {
      return group.groupsList.find((group: any) => group._id === groupID);
    }
  );

export const getGroups = createSelector(
  (state: any) => state.group,
  (group) => group.groupsList
);

export default groupSlice.reducer;

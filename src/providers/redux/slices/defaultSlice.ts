import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget, HourlyRate, TimeLog } from "../reduxTypes";

import { RootState } from "../store";

export interface DefaultState {
  budgets: Budget[];
  hourlyRate: HourlyRate;
  timeLogs: TimeLog[];
}

const initialState: DefaultState = {
  budgets: [],
  hourlyRate: null,
  timeLogs: [],
};

export const defaultSlice = createSlice({
  name: "default",
  initialState,
  reducers: {
    setBudgets: (state, action: PayloadAction<Budget[]>) => {
      state.budgets = action.payload;
    },
    setHourlyRate: (state, action: PayloadAction<HourlyRate>) => {
      state.hourlyRate = action.payload;
    },
    setTimeLogs: (state, action: PayloadAction<TimeLog[]>) => {
      state.timeLogs = action.payload;
    },
  },
});

export const { setBudgets, setHourlyRate, setTimeLogs } = defaultSlice.actions;

export const budgets = (state: RootState) => state.default.budgets;
export const hourlyRate = (state: RootState) => state.default.hourlyRate;
export const timeLogs = (state: RootState) => state.default.timeLogs;

export default defaultSlice;

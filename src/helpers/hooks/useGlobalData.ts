import { useAppDispatch, useAppSelector } from "helpers/redux-hooks";
import { Budget, HourlyRate, TimeLog } from "providers/redux/reduxTypes";

import {
  budgets as budgetsSelector,
  setBudgets as importedSetBudgets,
  hourlyRate as hourlyRateSelector,
  setHourlyRate as importedSetHourlyRate,
  timeLogs as timeLogsSelector,
  setTimeLogs as importedSetTimeLogs,
} from "providers/redux/slices/defaultSlice";

export const useGlobalData = () => {
  const dispatch = useAppDispatch();

  const budgets = useAppSelector(budgetsSelector);
  const hourlyRate = useAppSelector(hourlyRateSelector);
  const timeLogs = useAppSelector(timeLogsSelector);

  const setBudgets = (budgets: Budget[]) => dispatch(importedSetBudgets(budgets));
  const setHourlyRate = (hourlyRate: HourlyRate) => dispatch(importedSetHourlyRate(hourlyRate));
  const setTimeLogs = (timeLogs: TimeLog[]) => dispatch(importedSetTimeLogs(timeLogs));

  const getters = {
    budgets,
    hourlyRate,
    timeLogs,
  };

  const setters = {
    setBudgets,
    setHourlyRate,
    setTimeLogs,
  };

  return {
    ...getters,
    ...setters,
  };
};

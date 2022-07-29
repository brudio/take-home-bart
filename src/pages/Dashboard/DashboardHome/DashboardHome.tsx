import { useGlobalData } from "helpers/hooks/useGlobalData";
import { ProjectDate } from "providers/redux/reduxTypes";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";
import Label from "components/Label/Label";
import InputField from "components/InputField/InputField";
import Input from "components/Input/Input";
import { StyledDashboardHome } from "./DashboardHome.style";

import "react-datepicker/dist/react-datepicker.css";

const DashboardHome = () => {
  const { budgets, hourlyRate, timeLogs, setBudgets, setHourlyRate, setTimeLogs } = useGlobalData();

  const [budget, setBudget] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [projectStart, setProjectStart] = useState<ProjectDate>(null);
  const [projectEnd, setProjectEnd] = useState<ProjectDate>(null);

  const [newHourlyRate, setNewHourlyRate] = useState<number>(0);
  const [hourlyRateCurrency, setHourlyRateCurrency] = useState<string>("");

  const [date, setDate] = useState<ProjectDate>(null);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [workDescription, setWorkDescription] = useState<string>("");

  const handleAddABudget = () => {
    const newBudget = {
      id: uuidv4(),
      budget,
      currency,
      projectEnd,
      projectStart,
    };

    setBudgets([...budgets, newBudget]);
  };

  const handleSetHourlyRate = () => {
    const newRate = { hourlyRate: newHourlyRate, currency: hourlyRateCurrency };

    setHourlyRate(newRate);
  };

  const handleCreateTimeLog = () => {
    const newTimeLog = { id: uuidv4(), date, timeSpent, workDescription };

    setTimeLogs([...timeLogs, newTimeLog]);
  };

  return (
    <StyledDashboardHome>
      <h1>Dashboard Home</h1>
      <form>
        <InputField>
          <Label label="Budget" />
          <Input
            value={budget}
            type="number"
            onChange={(e) => setBudget(parseInt(e.target.value, 10))}
          />
        </InputField>
        <InputField>
          <Label label="Currency" />
          <Input value={currency} type="text" onChange={(e) => setCurrency(e.target.value)} />
        </InputField>
        <InputField>
          <Label label="Project Start" />
          <DatePicker
            selected={projectStart}
            onChange={(date) => setProjectStart(date)}
            minDate={new Date()}
            showTimeSelect
            timeIntervals={60}
            dateFormat="Pp"
            popperPlacement="bottom-end"
            formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
            timeFormat="h a"
          />
        </InputField>
        <InputField>
          <Label label="Project End" />
          <DatePicker
            selected={projectEnd}
            onChange={(date) => setProjectEnd(date)}
            minDate={new Date()}
            showTimeSelect
            timeIntervals={60}
            dateFormat="Pp"
            popperPlacement="bottom-end"
            formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
            timeFormat="h a"
          />
        </InputField>
        <button type="button" onClick={handleAddABudget}>
          Add a budget
        </button>
      </form>
      <form>
        <InputField>
          <Label label="Hourly Rate" />
          <Input
            value={newHourlyRate}
            type="number"
            onChange={(e) => setNewHourlyRate(parseInt(e.target.value, 10))}
          />
        </InputField>
        <InputField>
          <Label label="Currency" />
          <Input
            value={hourlyRateCurrency}
            type="text"
            onChange={(e) => setHourlyRateCurrency(e.target.value)}
          />
        </InputField>
        <button type="button" onClick={handleSetHourlyRate}>
          Set Hourly Rate
        </button>
      </form>
      <form>
        <InputField>
          <Label label="Date" />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            showTimeSelect
            timeIntervals={60}
            dateFormat="Pp"
            popperPlacement="bottom-end"
            formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
            timeFormat="h a"
          />
        </InputField>
        <InputField>
          <Label label="Time Spent" />
          <Input
            value={timeSpent}
            type="number"
            onChange={(e) => setTimeSpent(parseInt(e.target.value, 10))}
          />
        </InputField>
        <InputField>
          <Label label="Work Description" />
          <Input
            value={workDescription}
            type="text"
            onChange={(e) => setWorkDescription(e.target.value)}
          />
        </InputField>
        <button type="button" onClick={handleCreateTimeLog}>
          Create Time Log
        </button>
      </form>

      <h2>Budgets</h2>
      {budgets && budgets.map((budget) => <div key={budget?.id}>{budget?.budget}</div>)}

      <h2>Hourly Rate</h2>
      {hourlyRate && <div>{hourlyRate.hourlyRate}</div>}

      <h2>Time Logs</h2>
      {timeLogs &&
        timeLogs.map((timeLog) => <div key={timeLog?.id}>{timeLog?.workDescription}</div>)}
    </StyledDashboardHome>
  );
};

export default DashboardHome;

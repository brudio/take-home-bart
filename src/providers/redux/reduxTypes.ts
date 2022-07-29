export type ProjectDate = Date | null;

export type Budget = {
  id: string;
  budget: number;
  currency: string;
  projectStart: ProjectDate;
  projectEnd: ProjectDate;
} | null;

export type HourlyRate = {
  currency: string;
  hourlyRate: number;
} | null;

export type TimeLog = {
  id: string;
  date: ProjectDate;
  timeSpent: number;
  workDescription: string;
} | null;

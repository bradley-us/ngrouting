export enum LEVELS {
  "INFO",
  "URGENT",
  "BLOCKING"
}

export interface ITask {
  title: string;
  description: string;
  status: boolean;
  level: LEVELS
}

import { Column } from "material-table";

export enum questionType {
  slider,
  fiveIcons,
  twoIcons,
  stars,
}

export interface ISurveyQuestion {
  number: number;
  question: string;
  type: questionType;
  images: string[];
}

export interface IQuestionStatus {
  status?: string;
  valid: boolean;
  touched: boolean;
}

export interface IQuestionResponse {
  note: number;
  number: number;
  surveyCode: string;
  User: string | null;
}

export interface IValidationCode {
  code: string;
  User: string | null;
}

export interface ICurrentSurveyResult {
  Period: {
    StartDate: string;
    EndDate: string;
  };
  Completed: string;
  CurrentResult: number;
  HistoricResult: number;
}
export interface IValidationUser {
  Email: string;
  Password: string;
}
export interface IResultsByUsers {
  Average: number;
  Notes: { Number: number; Note: number; SurveyCode: string }[];
  User: string;
}
export interface IResultsByQuestions {
  Average: number;
  Notes: { Note: number; User: string }[];
  QuestionNumber: number;
}
export interface ITeamDTO {
  Frequency: number;
  Name: string; //TeamName
  Num_mumbers: number;
  StartDate: string; // format "2number2number-number1-31"
  Surveys?: any;
  Users?: any;
}
export interface IRoleDTO {
  Id?: number;
  Name: string;
  UserID?: number;
}
export interface IUser {
  Id: number;
  Full_name: string;
  Email: string;
  Password: string;
  Roles: IRoleDTO[];
  Teams: ITeamDTO[];
}

export interface IUserDTO {
  Full_name: string;
  Email: string;
  Password: string;
  Roles: IRoleDTO[];
  Teams: ITeamDTO[];
}

export interface IUserTable {
  columns: Array<Column<IUserData>>;
}

export interface IUserData {
  Id: number;
  Full_name: string;
  Email: string;
  Password?: string;
  Roles: string;
  Teams: string;
  tableData?: { id: number };
}

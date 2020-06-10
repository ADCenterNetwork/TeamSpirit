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
  answer: number;
  status?: string;
  valid: boolean;
  touched: boolean;
}

export interface IQuestionResponse {
  note: number;
  number: number;
  surveyCode: string;
}

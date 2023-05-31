import { UserCategoryType } from "../types/user-category-type";

export interface ISendLetsTalkFormPayload {
  fullName: string;
  email: string;
  category: UserCategoryType;
  howWeCanHelp: string;
}

export interface ISendLetsTalkFormResponse {
  isSucceeded: boolean;
  message: string;
  errorCode: number;
  errorDescription: string;
}

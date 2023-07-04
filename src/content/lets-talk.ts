import { UserCategoryType } from "../common/types/user-category-type";

export enum DefineYourselfOptions {
  DEVELOPER = "Developer",
  INVESTOR = "Investor",
  USER = "User",
  PARTNER = "Partner",
  INTERESTED = "Interested",
}

export const defineYourselfDropdownData: Array<UserCategoryType> = [
  ...Object.values(DefineYourselfOptions),
];

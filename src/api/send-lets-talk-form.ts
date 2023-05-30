import axios, { AxiosResponse } from "axios";

import {
  ISendLetsTalkFormPayload,
  ISendLetsTalkFormResponse,
} from "../common/interfaces/lets-talk-form-request";

const MAIL_SERVICE_ENDPOINT =
  "https://dev-api.decard.io/mail-service/tagion-inquiry/";

export const sendLetsTalkForm = (
  payload: ISendLetsTalkFormPayload
): Promise<AxiosResponse<ISendLetsTalkFormResponse>> => {
  return axios.post(MAIL_SERVICE_ENDPOINT, payload);
};

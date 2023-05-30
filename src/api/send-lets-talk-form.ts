import axios, { AxiosResponse } from "axios";

import {
  ISendLetsTalkFormPayload,
  ISendLetsTalkFormResponse,
} from "../common/interfaces/lets-talk-form-request";

export const sendLetsTalkForm = (
  payload: ISendLetsTalkFormPayload
): Promise<AxiosResponse<ISendLetsTalkFormResponse>> => {
  return axios.post(process.env.GATSBY_MAIL_SERVICE_ENDPOINT as string, payload);
};

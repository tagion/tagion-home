import axios, { AxiosResponse } from "axios";

import {
  ISubscribeToNewsletterPayload,
  ISubscribeToNewsletterResponse,
} from "../common/interfaces/subscribe-to-newsletter-request";

const CRM_ENDPOINT = "https://i25scrm.azurewebsites.net/api/contacts";

const headers = { "x-environment": process.env.GATSBY_ENV };

export const subscribeToNewsletter = (
  payload: ISubscribeToNewsletterPayload
): Promise<AxiosResponse<ISubscribeToNewsletterResponse>> => {
  return axios.post(
    `${CRM_ENDPOINT}`,
    { ...payload, mailgroup: "None" },
    {
      headers,
    }
  );
};
export interface ISubscribeToNewsletterPayload {
  email: string;
  name?: string;
}

export interface ISubscribeToNewsletterResponse {
  id: string;
  email: string;
  isnew: boolean;
  mailgroup: number;
  name: string;
  type: string;
}

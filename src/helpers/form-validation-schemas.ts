import * as Yup from "yup";

const message = "The field cannot be empty";

////// todo transfer to a separate file
export const EMAIL_REGEXP =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const FULL_NAME_REGEXP =
  /^[ a-zA-Z]+("?)(([',.-][a-zA-Z ])[a-zA-Z ]*)*$/;

export const PHONE_NUMBER_REGEXP =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

//////

export const letsTalkSchema = Yup.object().shape({
  name: Yup.string().required(message),
  email: Yup.string()
    .matches(EMAIL_REGEXP, `Please use following format: name@example.com`)
    .required(message),
  defineYourselfIndex: Yup.number().required(message),
  checkbox: Yup.bool().notOneOf([false], message),
});

export const subscribeToNewsletterSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGEXP, `Please use following format: name@example.com`)
    .required(message),
});

export const submitRequestSchema = Yup.object().shape({
  name: Yup.string().required(message),
  email: Yup.string()
    .matches(EMAIL_REGEXP, `Please use following format: name@example.com`)
    .required(message),
  phoneNumber: Yup.string()
    .matches(PHONE_NUMBER_REGEXP, `Phone number is not valid`)
    .required(message),
  checkbox: Yup.bool().notOneOf([false], message),
});

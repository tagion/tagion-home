import * as Yup from "yup";

const message = "The field cannot be empty";

export const formValidationSchema = Yup.object().shape({
  name: Yup.string().required(message),
  email: Yup.string().required(message),
  defineYourselfIndex: Yup.number().required(message),
  checkbox: Yup.bool().notOneOf([false], message),
});

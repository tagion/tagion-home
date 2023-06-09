import React, { useState, useEffect, FormEvent } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { subscribeToNewsletterSchema } from "../helpers";
import { subscribeToNewsletter } from "../api/subscribe-to-newsletter";
import { ToastifyMessage } from "../components";
import { useRequest } from "./useRequest";
import { ISubscribeToNewsletterResponse } from "../common/interfaces/subscribe-to-newsletter-request";

const initialFormValues = {
  email: "",
  fullName: "",
};

export const useSignupToOurNewsletterFormik = () => {
  const [buttonText, setButtonText] = useState("Subscribe");
  const [isEmailFieldHaveErrorMessage, setIsEmailFieldHaveErrorMessage] =
    useState(false);

  const { response, isPending, error, reqHandler, resetStates } =
    useRequest<ISubscribeToNewsletterResponse>({
      onSuccess: ({ type }) => {
        if (type === "contact" || type === "account") {
          toastGenerator({ isSuccess: true });
        } else {
          toastGenerator({ isSuccess: false });
        }
      },
      onFailure: (e) => {
        toastGenerator({ isSuccess: false });
      },
    });

  const buttonTextHandler = () => {
    setButtonText("Done");
    setTimeout(() => {
      setButtonText("Subscribe");
      resetStates();
    }, 2000);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name && setIsEmailFieldHaveErrorMessage(() => false);
    formik.handleChange(e);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: subscribeToNewsletterSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email, fullName: name }) => {
      await reqHandler(() => subscribeToNewsletter({ email, name }));
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
    formik.handleSubmit(e);
  };

  useEffect(() => {
    setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
  }, [formik.errors]);

  useEffect(() => {
    if (!isPending && response) {
      buttonTextHandler();
    }
  }, [isPending, response]);

  return {
    formik,
    handleInputChange,
    isEmailFieldHaveErrorMessage,
    onSubmit,
    buttonText,
    isPending,
  };
};

const toastGenerator = ({ isSuccess }: { isSuccess: boolean }) =>
  isSuccess
    ? toast(({ closeToast }) => (
        <ToastifyMessage
          closeToast={closeToast}
          status="success"
          mainText="Success!"
          secondaryText="Thanks for subscribing"
        />
      ))
    : toast(({ closeToast }) => (
        <ToastifyMessage
          closeToast={closeToast}
          status="error"
          mainText="Error occured"
          secondaryText="Please try again later"
        />
      ));

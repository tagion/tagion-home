import React, { useState, useEffect, FormEvent } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { subscribeToNewsletterSchema } from "../helpers";
import { subscribeToNewsletter } from "../api/subscribe-to-newsletter";
import { ToastifyMessage } from "../components";

const initialFormValues = {
  email: "",
  fullName: "",
};

export const useSignupToOurNewsletterFormik = () => {
  const [isEmailFieldHaveErrorMessage, setIsEmailFieldHaveErrorMessage] =
    useState(false);

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
      try {
        toast.dismiss();
        const {
          data: { type },
        } = await subscribeToNewsletter({ email, name });

        if (type === "contact" || type === "account") {
          toastGenerator({ isSuccess: true });
        } else {
          toastGenerator({ isSuccess: false });
        }
      } catch (e) {
        console.error(`Error: ${e}.`);
        toastGenerator({ isSuccess: false });
      }
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
    formik.handleSubmit(e);
  };

  useEffect(() => {
    setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
  }, [formik.errors]);

  return {
    formik,
    handleInputChange,
    isEmailFieldHaveErrorMessage,
    onSubmit,
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

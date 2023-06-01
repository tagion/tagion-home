import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import { Button, Input, ToastifyMessage } from "../../components";
import { subscribeToNewsletter } from "../../api/subscribe-to-newsletter";
import { subscribeToNewsletterSchema } from "../../helpers";

import * as styles from "./subscribe-to-our-newsletter.module.scss";

// import { ReactComponent as RingsIcon } from "../../assets/images/rings_icon.svg";
import ringsIcon from "../../assets/images/rings_icon.svg";

const cx = classNames.bind(styles);

const initialFormValues = {
  email: "",
  fullName: "",
};

export const SubscribeToOurNewsletterBlock: React.FC = () => {
  // todo create hook for validating
  const [isEmailFieldHaveErrorMessage, setIsEmailFieldHaveErrorMessage] =
    useState(false);

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: subscribeToNewsletterSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email, fullName: name }) => {
      try {
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

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name && setIsEmailFieldHaveErrorMessage(() => false);
    formik.handleChange(e);
  };

  useEffect(() => {
    setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
  }, [formik.errors]);

  return (
    <div className={cx("subscribe_to_our_newsletter_block")}>
      <div className={cx("content_wrapper")}>
        <div className={cx("icon_wrapper")}>
          {/* <RingsIcon /> */}
          <img src={ringsIcon} />
        </div>
        <div className={cx("body")}>
          <div className={`${cx("title")} title-font`}>
            Subscribe to our newsletter
          </div>
          <form
            className={cx("form")}
            onSubmit={(e) => {
              setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
              formik.handleSubmit(e);
            }}
          >
            <Input
              label="Full name"
              name="fullName"
              onChange={handleInputChange}
              value={formik.values.fullName}
              className={cx("name_input")}
            />
            <Input
              label="Email address"
              name="email"
              onChange={handleInputChange}
              value={formik.values.email}
              className={cx("email_input")}
              error={isEmailFieldHaveErrorMessage ? formik.errors.email : ""}
            />
            <Button name="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
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

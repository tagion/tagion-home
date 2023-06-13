import React from "react";
import classNames from "classnames/bind";
import { toast } from "react-toastify";

import { Button, Input, ToastifyMessage } from "../../components";
import { useSignupToOurNewsletterFormik } from "../../hooks";

import * as styles from "./subscribe-to-our-newsletter.module.scss";

import ringsPng from "../../assets/images/rings.png";

const cx = classNames.bind(styles);

export const SubscribeToOurNewsletterBlock: React.FC = () => {
  const {
    formik,
    handleInputChange,
    isEmailFieldHaveErrorMessage,
    onSubmit,
    buttonText,
    isPending,
  } = useSignupToOurNewsletterFormik();

  return (
    <div className={cx("subscribe_to_our_newsletter_block")}>
      <div className={cx("content_wrapper")}>
        <div className={cx("icon_wrapper")}>
          <img src={ringsPng} />
        </div>
        <div className={cx("body")}>
          <div className={`${cx("title")} title-font`}>
            Subscribe to our newsletter
          </div>
          <form className={cx("form")} onSubmit={onSubmit}>
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
            <Button
              name={buttonText}
              isLoading={isPending}
              isDisabled={buttonText === "Done"}
              contentWidth={112.3}
            />
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

import React from "react";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import { Button, Input, ToastifyMessage } from "../../components";
import { subscribeToNewsletter } from "../../api/subscribe-to-newsletter";
import { subscribeToNewsletterSchema } from "../../helpers";

import * as styles from "./subscribe-to-our-newsletter.module.scss";

import { ReactComponent as RingsIcon } from "../../assets/images/rings_icon.svg";

const cx = classNames.bind(styles);

const initialFormValues = {
  email: "",
  fullName: "",
};

export const SubscribeToOurNewsletterBlock: React.FC = () => {
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: subscribeToNewsletterSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email, fullName: name }) => {
      try {
        const {
          data: { type, isnew },
        } = await subscribeToNewsletter({ email, name });

        if (type === "contact" && isnew) {
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
    formik.handleChange(e);
  };

  return (
    <div className={cx("subscribe_to_our_newsletter_block")}>
      <div className={cx("content_wrapper")}>
        <div className={cx("icon_wrapper")}>
          <RingsIcon />
        </div>
        <div className={cx("body")}>
          <div className={`${cx("title")} title-font`}>
            Subscribe to our newsletter
          </div>
          <form className={cx("form")} onSubmit={formik.handleSubmit}>
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
              error={formik.errors.email}
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
          mainText="Successfully Sent"
          secondaryText="We will get back to you shortly"
        />
      ))
    : toast(({ closeToast }) => (
        <ToastifyMessage
          closeToast={closeToast}
          status="error"
          mainText="Error occured"
          secondaryText={
            <>
              Contact us via <span className="underline">ir@tagion.com</span>
            </>
          }
        />
      ));

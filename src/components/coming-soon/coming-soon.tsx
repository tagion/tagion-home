import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import { Button, Input, ToastifyMessage } from "../../components";
import { subscribeToNewsletterSchema } from "../../helpers";
import { subscribeToNewsletter } from "../../api/subscribe-to-newsletter";

import * as styles from "./coming-soon.module.scss";

const cx = classNames.bind(styles);

export const ComingSoon: React.FC = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const [isEmailFieldHaveErrorMessage, setIsEmailFieldHaveErrorMessage] =
    useState(false);

  //duplicated code!!!!!!!!!!!!!!!!
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: subscribeToNewsletterSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email }) => {
      try {
        const {
          data: { type },
        } = await subscribeToNewsletter({ email });

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

  const resizeHandler = () => {
    const footerHeight = document.getElementById("footer")?.offsetHeight || 0;
    setFooterHeight(footerHeight);
  };

  useEffect(() => {
    setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
  }, [formik.errors]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => {
      resizeHandler();
    });
    return () => window.removeEventListener("resize", () => resizeHandler());
  }, []);

  return (
    <div
      className={cx("coming_soon_page")}
      style={{ minHeight: `calc(100vh - ${footerHeight}px)` }}
    >
      <div className={cx("content")}>
        <div className={cx("title")}>
          Coming
          <br />
          Soon
        </div>
        <div className={cx("form_name")}>
          Sign up to our
          <br />
          newsletter
        </div>
        <form
          className={cx("form")}
          onSubmit={(e) => {
            setIsEmailFieldHaveErrorMessage(() => !!formik.errors.email);
            formik.handleSubmit(e);
          }}
        >
          <Input
            label="Email address"
            name="email"
            onChange={handleInputChange}
            value={formik.values.email}
            error={isEmailFieldHaveErrorMessage ? formik.errors.email : ""}
            isGrayTextColor
            className={cx("email_input")}
          />
          <Button name="Subscribe" type="submit" isWhite />
        </form>
      </div>
    </div>
  );
};

//duplicated code!!!!!!!!!!!!!!!!
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

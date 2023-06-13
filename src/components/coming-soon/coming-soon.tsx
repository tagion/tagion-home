import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { toast } from "react-toastify";

import { Button, Input, ToastifyMessage } from "../../components";
import { useSignupToOurNewsletterFormik } from "../../hooks";

import * as styles from "./coming-soon.module.scss";

const cx = classNames.bind(styles);

export const ComingSoon: React.FC = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const { formik, handleInputChange, isEmailFieldHaveErrorMessage, onSubmit } =
    useSignupToOurNewsletterFormik();

  const resizeHandler = () => {
    const footerHeight = document.getElementById("footer")?.offsetHeight || 0;
    setFooterHeight(footerHeight);
  };

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
        <form className={cx("form")} onSubmit={onSubmit}>
          <div className={cx("input_wrapper")}>
            <Input
              label="Full name"
              name="fullName"
              onChange={handleInputChange}
              value={formik.values.fullName}
              isGrayTextColor
              className={cx("fullName_input")}
            />
            <Input
              label="Email address"
              name="email"
              onChange={handleInputChange}
              value={formik.values.email}
              error={isEmailFieldHaveErrorMessage ? formik.errors.email : ""}
              isGrayTextColor
              className={cx("email_input")}
            />
          </div>

          <Button
            name="Subscribe"
            type="submit"
            isWhite
            className={cx("submit")}
          />
        </form>
      </div>
    </div>
  );
};

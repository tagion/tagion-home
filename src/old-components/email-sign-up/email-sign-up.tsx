import React from "react";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { Link } from "gatsby";

import { Button } from "../button";

import * as styles from "./email-sign-up.module.scss";

const cx = classNames.bind(styles);

export const EmailSignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async ({ email }, { setSubmitting, setFieldValue }) => {
      console.log(`email: ${email}`);
    },
  });

  return (
    <div className={cx("email_sign_up")}>
      <span className={cx("title")}>
        Stay up to date. Sign up to our newsletter.
      </span>
      <div className={cx("input_wrapper")}>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Button
          name="Subscribe"
          onClick={formik.handleSubmit}
          className={cx("submit")}
        />
      </div>
      <div className={cx("additional_info")}>
        <span>Unsubscribe at any time.</span>
        <Link to="/privacy-policy">Privacy policy↗</Link>
      </div>
    </div>
  );
};

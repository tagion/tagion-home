import React from "react";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { Select } from "@material-ui/core";
import { MenuItem } from "@mui/material";

import { ReactComponent as SelectArrowIcon } from "../../assets/images/select_tag_arrow_icon.svg";

import * as styles from "./form.module.scss";

const cx = classNames.bind(styles);

type formikOnChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>;

export const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      defineYourself: "",
      help: "",
      checkbox: "",
    },
    onSubmit: async (
      { email, name, defineYourself, help, checkbox },
      { setSubmitting, setFieldValue }
    ) => {
      console.log(
        `
        email: ${email},
        name: ${name},
        defineYourself: ${defineYourself},
        help: ${help},
        checkbox: ${checkbox}
        `
      );
    },
  });

  const handleInputChange = async (e: formikOnChangeEventType) => {
    formik.handleChange(e);
  };

  return (
    <form className={cx("form")} onSubmit={formik.handleSubmit}>
      <span className={cx("title")}>Make an enquiry</span>

      <div className={cx("field_wrapper")}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={handleInputChange}
        />
      </div>

      <div className={cx("field_wrapper")}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={handleInputChange}
        />
      </div>

      <div className={cx("field_wrapper")}>
        <label htmlFor="defineYourself">How would you define yourself?</label>
        <Select
          className={cx("select")}
          name="defineYourself"
          IconComponent={SelectArrowIcon}
          value={formik.values.defineYourself}
          onChange={handleInputChange}
        >
          <MenuItem value={Superheroes.BATMAN}>{Superheroes.BATMAN}</MenuItem>
          <MenuItem value={Superheroes.SPIDERMAN}>
            {Superheroes.SPIDERMAN}
          </MenuItem>
          <MenuItem value={Superheroes.IRONMAN}>{Superheroes.IRONMAN}</MenuItem>
        </Select>
      </div>

      <div className={cx("field_wrapper")}>
        <label htmlFor="help">How can we help?</label>
        <textarea
          name="help"
          value={formik.values.help}
          onChange={handleInputChange}
        />
      </div>

      <div className={cx("checkbox_wrapper")}>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className={cx("checkbox")}
          value="checked"
          onChange={formik.handleChange}
        />
        <label htmlFor="checkbox">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </label>
      </div>

      <button type="submit" className={cx("submit")}>
        Submit
      </button>
    </form>
  );
};

export enum Superheroes {
  BATMAN = "Batman",
  SPIDERMAN = "Spiderman",
  IRONMAN = "Ironman",
}

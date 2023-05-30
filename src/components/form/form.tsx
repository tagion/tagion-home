import React from "react";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { SelectChangeEvent } from "@mui/material/Select";
// import { Tooltip as ReactTooltip } from "react-tooltip";

import { Button, Input, Dropdown, ToastifyMessage } from "../../components";
import { letsTalkSchema } from "../../helpers";
import { defineYourselfDropdownData } from "../../content/lets-talk";
import { sendLetsTalkForm } from "../../api/send-lets-talk-form";

import * as styles from "./form.module.scss";
import "react-tooltip/dist/react-tooltip.css";

const cx = classNames.bind(styles);

type formikOnChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  | SelectChangeEvent<string>;

export const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      defineYourselfIndex: "",
      howWeCanHelp: "",
      checkbox: false,
    },
    validationSchema: letsTalkSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({
      email,
      name,
      defineYourselfIndex,
      howWeCanHelp,
      checkbox,
    }) =>
      // { setSubmitting, setFieldValue }
      {
        try {
          const {
            data: { isSucceeded },
          } = await sendLetsTalkForm({
            email,
            fullName: name,
            category: defineYourselfDropdownData[Number(defineYourselfIndex)],
            howWeCanHelp,
          });

          isSucceeded && toastGenerator({ isSuccess: true });
        } catch (e) {
          console.error(`Error: ${e}.`);
          toastGenerator({ isSuccess: false });
        }
      },
  });

  const handleInputChange = async (e: formikOnChangeEventType) => {
    formik.handleChange(e);
  };

  return (
    <form className={cx("form")} onSubmit={formik.handleSubmit}>
      <div className={cx("input_wrapper")}>
        <Input
          label="Name"
          name="name"
          onChange={handleInputChange}
          value={formik.values.name}
          error={!formik.values.name.length ? formik.errors.name : ""}
          className={cx("input")}
        />
        <Input
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={handleInputChange}
          error={!formik.values.email.length ? formik.errors.email : ""}
          className={cx("input")}
        />
      </div>

      <Dropdown
        name="defineYourselfIndex"
        label="How would you define yourself?"
        value={formik.values.defineYourselfIndex}
        onChange={(e) => handleInputChange(e)}
        menuItems={defineYourselfDropdownData}
        className={cx("dropdown")}
        error={
          formik.values.defineYourselfIndex === ""
            ? formik.errors.defineYourselfIndex
            : ""
        }
      />

      <div className={cx("textarea_block")}>
        <label htmlFor="help">How can we help?</label>
        <div className={cx("textarea_wrapper")} id="textarea-wrapper">
          <textarea
            name="howWeCanHelp"
            value={formik.values.howWeCanHelp}
            onChange={handleInputChange}
            className="font-16"
            onClick={() => {
              document
                .getElementById("textarea-wrapper")
                ?.style.setProperty("outline-width", "2px");
            }}
            onBlur={() => {
              document
                .getElementById("textarea-wrapper")
                ?.style.setProperty("outline-width", "1px");
            }}
          />
        </div>
      </div>

      <div
        className={cx("checkbox_wrapper", {
          isError: !formik.values.checkbox ? formik.errors.checkbox : "",
        })}
        // id="test-id"
      >
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className={cx("checkbox")}
          checked={formik.values.checkbox}
          onChange={formik.handleChange}
        />
        <label htmlFor="checkbox">
          I agree to comply with GDPR and the website's terms before submitting
          this form.
        </label>
      </div>
      <Button name="Submit" className={cx("submit_button")} />
      {/* <ReactTooltip
        anchorId="test-id"
        // data-tooltip-id="app-title"
        // anchorSelect="app-title"
        place="bottom"
        content="Please check this box if you want to proceed."
        isOpen={true}
        // position={}
        // setIsOpen={() => true}
        // show
      /> */}
    </form>
  );
};

const toastGenerator = ({ isSuccess }: { isSuccess: boolean }) =>
  isSuccess
    ? toast(({ closeToast }) => (
        <ToastifyMessage
          closeToast={closeToast}
          status="success"
          mainText="Sent Successfully"
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

import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { SelectChangeEvent } from "@mui/material/Select";
import { AxiosError } from "axios";
// import { Tooltip as ReactTooltip } from "react-tooltip";

import { Button, Input, Dropdown, ToastifyMessage } from "../../components";
import { letsTalkSchema } from "../../helpers";
import { defineYourselfDropdownData } from "../../content/lets-talk";
import { sendLetsTalkForm } from "../../api/send-lets-talk-form";
import { useRequest } from "../../hooks/useRequest";
import { ISendLetsTalkFormResponse } from "../../common/interfaces/lets-talk-form-request";

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
  // todo create hook for validating
  const [buttonText, setButtonText] = useState("Submit");
  const [isFieldsHaveErrorMessages, setIsFieldsHaveErrorMessages] = useState({
    email: false,
    name: false,
    defineYourselfIndex: false,
    checkbox: false,
  });

  const { response, isPending, error, reqHandler, resetStates } =
    useRequest<ISendLetsTalkFormResponse>({
      onSuccess: ({ isSucceeded }) => {
        isSucceeded && toastGenerator({ isSuccess: true });
      },
      onFailure: (e) => {
        const isTooManyRequestsError =
          (e as AxiosError)?.response?.status === 429;
        toastGenerator({
          isSuccess: isTooManyRequestsError,
        });
        isTooManyRequestsError && buttonTextHandler();
      },
    });

  const buttonTextHandler = () => {
    setButtonText("Done");
    setTimeout(() => {
      setButtonText("Submit");
      resetStates();
    }, 2000);
  };

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
    onSubmit: async ({ email, name, defineYourselfIndex, howWeCanHelp }) => {
      await reqHandler(() =>
        sendLetsTalkForm({
          email,
          fullName: name,
          category: defineYourselfDropdownData[Number(defineYourselfIndex)],
          howWeCanHelp,
        })
      );
    },
  });

  const handleInputChange = async (e: formikOnChangeEventType) => {
    e.target.name &&
      setIsFieldsHaveErrorMessages((isFieldsHaveErrorMessages) => ({
        ...isFieldsHaveErrorMessages,
        [e.target.name as string]: false,
      }));
    formik.handleChange(e);
  };

  const isFieldsHaveErrorMessagesHandler = () =>
    setIsFieldsHaveErrorMessages(() => ({
      email: !!formik.errors.email,
      name: !!formik.errors.name,
      defineYourselfIndex: !!formik.errors.defineYourselfIndex,
      checkbox: !!formik.errors.checkbox,
    }));

  useEffect(() => {
    isFieldsHaveErrorMessagesHandler();
  }, [formik.errors]);

  useEffect(() => {
    if (!isPending && response) {
      buttonTextHandler();
    }
  }, [isPending, response]);

  return (
    <form
      className={cx("form")}
      onSubmit={(e) => {
        formik.handleSubmit(e);
        isFieldsHaveErrorMessagesHandler();
      }}
    >
      <div className={cx("input_wrapper")}>
        <Input
          label="Name"
          name="name"
          onChange={handleInputChange}
          value={formik.values.name}
          error={isFieldsHaveErrorMessages.name ? formik.errors.name : ""}
          className={cx("input")}
        />
        <Input
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={handleInputChange}
          error={isFieldsHaveErrorMessages.email ? formik.errors.email : ""}
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
          isFieldsHaveErrorMessages.defineYourselfIndex
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
          isError: isFieldsHaveErrorMessages.checkbox
            ? formik.errors.checkbox
            : "",
        })}
        // id="test-id"
      >
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className={cx("checkbox")}
          checked={formik.values.checkbox}
          onChange={handleInputChange}
        />
        <label htmlFor="checkbox">
          I agree to comply with GDPR and the website's terms before submitting
          this form.
        </label>
      </div>
      <Button
        name={buttonText}
        isLoading={isPending}
        contentWidth={77.6}
        className={cx("submit_button")}
        isDisabled={buttonText === "Done"}
      />
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

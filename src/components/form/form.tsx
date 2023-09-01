import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { SelectChangeEvent } from "@mui/material/Select";
import { AxiosError } from "axios";
import * as Yup from "yup";
// import { Tooltip as ReactTooltip } from "react-tooltip";

import { Button, Input, Dropdown, ToastifyMessage } from "../../components";
import {
  DefineYourselfOptions,
  defineYourselfDropdownData,
} from "../../content/lets-talk";
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

interface InputProps {
  withPhoneNumber?: boolean;
  withDefineYourself?: boolean;
  withHowWeCanHelp?: boolean;
  inOneRowMainInputs?: boolean;
  schema: Yup.AnyObject;
}

export const Form: React.FC<InputProps> = ({
  withPhoneNumber,
  withDefineYourself,
  withHowWeCanHelp,
  inOneRowMainInputs,
  schema,
}) => {
  // todo create hook for validating
  const [buttonText, setButtonText] = useState("Submit");
  const [isFieldsHaveErrorMessages, setIsFieldsHaveErrorMessages] = useState({
    email: false,
    name: false,
    phoneNumber: false,
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
      phoneNumber: "",
      defineYourselfIndex: "",
      howWeCanHelp: "",
      checkbox: false,
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({
      email,
      name,
      phoneNumber,
      defineYourselfIndex,
      howWeCanHelp,
    }) => {
      console.log(email, name, phoneNumber, defineYourselfIndex, howWeCanHelp);

      const category =
        defineYourselfIndex === ""
          ? DefineYourselfOptions.INTERESTED
          : defineYourselfDropdownData[Number(defineYourselfIndex)];

      await reqHandler(() =>
        sendLetsTalkForm({
          email,
          fullName: name,
          phoneNumber,
          category,
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
      phoneNumber: !!formik.errors.phoneNumber,
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

  const isDoneStatus = buttonText === "Done";

  return (
    <form
      className={cx("form")}
      onSubmit={(e) => {
        formik.handleSubmit(e);
        isFieldsHaveErrorMessagesHandler();
      }}
    >
      <div className={cx("input_wrapper", { inOneRow: inOneRowMainInputs })}>
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

      {withPhoneNumber && (
        <Input
          label="Phone (optional)"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={handleInputChange}
          error={
            isFieldsHaveErrorMessages.phoneNumber
              ? formik.errors.phoneNumber
              : ""
          }
          className={cx("input")}
        />
      )}

      {withDefineYourself && (
        <Dropdown
          name="defineYourselfIndex"
          label="How would you define yourself?"
          value={formik.values.defineYourselfIndex}
          onChange={(e) => handleInputChange(e)}
          menuItems={defineYourselfDropdownData}
          className={{ wrapper: cx("dropdown") }}
          error={
            isFieldsHaveErrorMessages.defineYourselfIndex
              ? formik.errors.defineYourselfIndex
              : ""
          }
        />
      )}

      {withHowWeCanHelp && (
        <div className={cx("textarea_block")}>
          <label htmlFor="help">How can we help?</label>
          <div className={cx("textarea_wrapper")} id="textarea-wrapper">
            <textarea
              name="howWeCanHelp"
              value={formik.values.howWeCanHelp}
              onChange={handleInputChange}
              className="inter-16"
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
      )}

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
        contentWidth={81}
        className={cx("submit_button")}
        withSuccessIcon={isDoneStatus}
        isDisabled={isDoneStatus || isPending}
        isGradientAdded={!isPending}
        isGradientFixedActive={isDoneStatus}
        type="submit"
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

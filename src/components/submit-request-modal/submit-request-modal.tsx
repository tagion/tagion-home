import React from "react";
import classNames from "classnames/bind";
import Dialog from "@mui/material/Dialog";

import { Button, Form, GradientSpotsWrapper } from "../../components";
import { submitRequestSchema } from "../../helpers";
import { getTagionsPageGradients } from "../../content";

import { ReactComponent as CloseIcon } from "../../assets/images/close_icon.svg";
// todo change to new rocket
import rocketIcon from "../../assets/images/rocket_old.png";

import * as styles from "./submit-request-modal.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  open: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubmitRequestModal: React.FC<InputProps> = ({
  setIsModalOpened,
  open,
}) => {
  return (
    <Dialog
      onClose={() => setIsModalOpened(false)}
      open={open}
      className={cx("modal")}
      disableRestoreFocus
    >
      <GradientSpotsWrapper
        gradients={getTagionsPageGradients.submitModal}
        disableMainSidePaddings
        disableOverflowHidden
      >
        <div className={cx("content")}>
          <div className={`${cx("title")} prompt-regular`}>
            Submit your request and we will get back to you. Stay tuned.
          </div>
          <CloseIcon
            className={cx("close_mobile_icon")}
            onClick={() => setIsModalOpened(false)}
          />
          <Button
            Icon={CloseIcon}
            isRounded
            onClick={() => setIsModalOpened(false)}
            className={cx("close_desktop_icon")}
          />

          <Form withPhoneNumber schema={submitRequestSchema} />

          <img
            src={rocketIcon}
            alt="rocket icon"
            className={cx("rocket_icon")}
          />
        </div>
      </GradientSpotsWrapper>
    </Dialog>
  );
};

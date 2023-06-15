import React from "react";
import classNames from "classnames/bind";

import { ReactComponent as SuccessIcon } from "../../assets/images/circle_success_icon.svg";
import { ReactComponent as ErrorIcon } from "../../assets/images/warning_icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close_icon.svg";

import * as styles from "./toastify.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  status: "success" | "error";
  mainText: string;
  secondaryText?: string | JSX.Element;
  closeToast?: () => void;
}

export const ToastifyMessage: React.FC<InputProps> = ({
  status,
  mainText,
  secondaryText,
  closeToast,
}) => {
  const isSuccess = status === "success";

  return (
    <div className={cx("message")}>
      {isSuccess ? (
        <SuccessIcon className={cx("status_icon")} />
      ) : (
        <ErrorIcon className={cx("status_icon")} />
      )}

      <div className={cx("text")}>
        <div className={cx("main")}>{mainText}</div>
        {secondaryText && (
          <div className={cx("secondary")}>{secondaryText}</div>
        )}
      </div>

      <CloseIcon className={cx("close_icon")} onClick={closeToast} />

      <div className={cx("gradient_spot", { isSuccess })} />
    </div>
  );
};

import React from "react";
import classNames from "classnames/bind";
import { InputAdornment, TextField } from "@mui/material";

import { ReactComponent as WarningIcon } from "../../assets/images/warning_icon.svg";

import * as styles from "./input.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name: string;
  value: string;
  label?: string;
  className?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  value,
  label,
  className,
  error,
  onChange,
}) => {
  return (
    <div className={`${cx("input_wrapper")} ${className}`}>
      <TextField
        label={label}
        variant="standard"
        name={name}
        value={value}
        className={`${cx("input", { isError: error })} font-16`}
        onChange={onChange}
        InputProps={
          !!error
            ? {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={cx("input_adornment")}
                  >
                    <WarningIcon />
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
      <div className={`${cx("error_message")} font-12`}>{error}</div>
    </div>
  );
};

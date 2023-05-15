import React from "react";
import classNames from "classnames/bind";

import * as styles from "./input.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className={cx("input")}
      placeholder={placeholder}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

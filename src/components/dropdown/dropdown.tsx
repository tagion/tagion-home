import React, { useEffect } from "react";
import classNames from "classnames/bind";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { HeightSizes, PaddingSizes } from "../../common/enums";
import { ReactComponent as DownArrowIcon } from "../../assets/images/down-arrow.svg";

import * as styles from "./dropdown.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  name: string;
  value: string;
  label?: string;
  className?: string;
  error?: string;
  menuItems: Array<string>;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export const Dropdown: React.FC<InputProps> = ({
  name,
  value,
  label,
  className = "",
  error,
  menuItems,
  onChange,
}) => {
  const resizeHandler = () => {
    const label = document.getElementById(`label-${className}`);
    if (label?.offsetHeight && label.offsetHeight > HeightSizes.INPUT_TEXT) {
      label.style.setProperty(
        "transform",
        `translate(0, ${
          PaddingSizes.INPUT_TOP_BOTTOM -
          (label.offsetHeight - HeightSizes.INPUT_TEXT)
        }px) scale(1)`
      );
    } else {
      label?.style.removeProperty("transform");
    }
  };

  // todo add resize hook
  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", () => resizeHandler());
    return () => {
      window.removeEventListener("resize", () => resizeHandler());
    };
  }, []);

  // fix for scrolling in Safari
  // maybe in the future we will move it to the root component
  useEffect(() => {
    if (globalThis?.document) {
      const body = globalThis.document.body;

      const observer = new MutationObserver(() => {
        body.style.touchAction = body.style.overflow === "hidden" ? "none" : "";
      });

      observer.observe(body, {
        attributes: true,
        attributeFilter: ["style"],
      });
    }
  }, []);

  return (
    <div className={`${cx("dropdown_wrapper")} ${className}`}>
      <FormControl fullWidth>
        <InputLabel className={cx("label")} id={`label-${className}`}>
          {label}
        </InputLabel>
        <Select
          label={label}
          className={`${cx("dropdown", { isError: error })}`}
          name={name}
          value={value}
          displayEmpty
          onChange={onChange}
          IconComponent={() => <DownArrowIcon />}
        >
          {menuItems.length &&
            menuItems.map((item, i) => (
              <MenuItem value={i} key={i}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <div className={`${cx("error_message")} font-12`}>{error}</div>
    </div>
  );
};

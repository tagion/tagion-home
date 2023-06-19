import React from "react";
import classNames from "classnames/bind";

import { Button } from "../button";

import * as styles from "./swiper-buttons.module.scss";

import { ReactComponent as LeftArrowIcon } from "../../assets/images/left_arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/images/right_arrow.svg";

const cx = classNames.bind(styles);

interface InputProps {
  isWhiteColor?: boolean;
  className?: string;
  prevOnClick: () => void;
  nextOnClick: () => void;
  prevButton?: { disabled?: boolean };
  nextButton?: { disabled?: boolean };
}

export const SwiperButtons: React.FC<InputProps> = ({
  prevOnClick,
  nextOnClick,
  className,
  isWhiteColor,
  prevButton,
  nextButton,
}) => {
  return (
    <div className={`${cx("swiper_buttons")} ${className}`}>
      <Button
        Icon={LeftArrowIcon}
        isRounded
        isWhite={isWhiteColor}
        onClick={() => prevOnClick()}
        isDisabled={prevButton?.disabled}
      />
      <Button
        Icon={RightArrowIcon}
        isRounded
        isWhite={isWhiteColor}
        onClick={() => nextOnClick()}
        isDisabled={nextButton?.disabled}
      />
    </div>
  );
};

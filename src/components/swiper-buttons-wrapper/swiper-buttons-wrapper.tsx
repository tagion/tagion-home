import React, { useState } from "react";
import { SwiperClass } from "swiper/react";

import { SwiperButtons } from "..";

interface InputProps {
  swiperInstance: SwiperClass;
  isWhiteColor?: boolean;
  className?: string;
}

export const SwiperButtonsWrapper: React.FC<InputProps> = ({
  swiperInstance,
  isWhiteColor,
  className,
}) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);

  swiperInstance.on("progress", () => {
    if (swiperInstance.progress >= 1) {
      setIsNextButtonDisabled(() => true);
    } else if (swiperInstance.progress <= 0) {
      setIsPrevButtonDisabled(() => true);
    } else {
      setIsPrevButtonDisabled(() => false);
      setIsNextButtonDisabled(() => false);
    }
  });

  return (
    <SwiperButtons
      prevOnClick={() => swiperInstance?.slidePrev()}
      nextOnClick={() => swiperInstance?.slideNext()}
      prevButton={{ disabled: isPrevButtonDisabled }}
      nextButton={{ disabled: isNextButtonDisabled }}
      className={className}
      isWhiteColor={isWhiteColor}
    />
  );
};

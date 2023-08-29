import * as React from "react";
import { Link, navigate } from "gatsby";
import classNames from "classnames/bind";

import { Button } from "../button";
import { GradientSpotsWrapper } from "../gradient-spots-wrapper";
import { notFoundPageGradient } from "../../content";
import { Colors } from "../../common/enums";

import PageNotFoundImg from "../../assets/images/404.png";

import * as styles from "./page-not-found.module.scss";

const cx = classNames.bind(styles);

export const PageNotFound = () => {
  return (
    <GradientSpotsWrapper
      gradients={notFoundPageGradient}
      disableMainSidePaddings
      bgColor={Colors.MAIN_DARK}
    >
      <div className={cx("not_found_wrapper")}>
        <img src={PageNotFoundImg} alt="Page not found" />
        <span className={`${cx("title")} subtitle-gradient-block-font`}>
          Sorry, page not found.
        </span>
        <span
          className={`${cx("description")} description-gradient-block-font`}
        >
          The page you were looking for doesn't exist.
        </span>

        <Button
          name="Back to Home"
          onClick={() => navigate("/")}
          isWhite
          isGradientAdded
          contentWidth={138}
        />
      </div>
    </GradientSpotsWrapper>
  );
};

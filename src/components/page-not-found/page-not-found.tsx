import * as React from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";

import { Button } from "../../old-components/button";

import PageNotFoundIcon from "../../assets/images/404.svg";

import * as styles from "./page-not-found.module.scss";

const cx = classNames.bind(styles);

export const PageNotFound = () => {
  return (
    <div className={cx("not_found_wrapper")}>
      <img src={PageNotFoundIcon} alt="Page not found" />
      <span>Sorry, page not found</span>
      <span>The page you were looking for doesn't exist.</span>
      <Link to="/">
        <Button name="Back to home" isNotWide={true} />
      </Link>
    </div>
  );
};

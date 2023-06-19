import React from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";
import { navigate } from "gatsby";

import { Button } from "../../components";

import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { miuCustomColumns } from "../../helpers";

import { ReactComponent as LeftArrowIcon } from "../../assets/images/left_arrow.svg";

import * as styles from "./information-block-wrapper.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  pageTitle: string;
  content: Array<{
    title?: string;
    description: JSX.Element;
  }>;
}

export const InformationBlockWrapper: React.FC<
  PropsWithChildren<InputProps>
> = ({ pageTitle, content }) => {
  return (
    <Grid
      container
      columns={miuCustomColumns}
      className={`${cx("information_block_wrapper")} main-lateral-paddings`}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        lg={3}
        xl={3}
        className={cx("button_wrapper")}
      >
        <LeftArrowIcon
          className={cx("mobile_button")}
          onClick={() => navigate("/")}
        />
        <Button
          Icon={LeftArrowIcon}
          isRounded
          onClick={() => navigate("/")}
          className={cx("desktop_button")}
        />
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={5}
        lg={9}
        xl={9}
        className={cx("content_wrapper")}
      >
        <div className={cx("page_title")}>{pageTitle}</div>
        <div className={cx("content")}>
          {content.length &&
            content.map(({ title, description }) => (
              <div className={cx("block")}>
                {title && <div className={cx("title")}>{title}</div>}
                <div className={cx("description")}>{description}</div>
              </div>
            ))}
        </div>
      </Grid>
    </Grid>
  );
};

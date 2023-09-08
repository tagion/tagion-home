import React from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

import { Button } from "../../components";
import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { miuCustomColumns } from "../../helpers";

import { ReactComponent as LeftArrowIcon } from "../../assets/images/left_arrow.svg";

import * as styles from "./information-block-wrapper.module.scss";

const cx = classNames.bind(styles);

export const InformationBlockWrapper: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const onBackButtonClick = () => history.back();
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
          onClick={onBackButtonClick}
        />
        <Button
          Icon={LeftArrowIcon}
          isRounded
          onClick={onBackButtonClick}
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
        {children}
      </Grid>
    </Grid>
  );
};

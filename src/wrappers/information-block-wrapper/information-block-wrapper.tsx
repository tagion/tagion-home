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
      id="information_block_wrapper"
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        lg={3}
        xl={3}
        className={cx("navigation_side_wrapper")}
        id="navigation_side_wrapper"
      >
        <LeftArrowIcon
          className={cx("mobile_button")}
          onClick={onBackButtonClick}
        />
        <div
          className={cx("desktop_navigation_block_wrapper")}
          id="desktop_navigation_block_wrapper"
        >
          <Button Icon={LeftArrowIcon} isRounded onClick={onBackButtonClick} />
        </div>
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={5}
        lg={9}
        xl={9}
        className={cx("content_side_wrapper")}
      >
        {children}
      </Grid>
    </Grid>
  );
};

import React from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";
// import { navigate } from "gatsby";

import { secureScalableDecentralizedData } from "../../content";
import { miuCustomColumns } from "../../helpers";
import { Button, Card } from "../../components";

import * as styles from "./secure-scalable-decentralised.module.scss";

const cx = classNames.bind(styles);

export const SecureScalableDecentralisedBlock: React.FC = () => {
  const blocksGenerator = () =>
    secureScalableDecentralizedData.map((block, i) => (
      <Grid
        item
        xs={4}
        sm={2}
        md={4}
        lg={3.12}
        xl={3.08}
        key={i}
        className={cx("block")}
      >
        <div className={cx("header")}>
          <div className={cx("indicator")}></div>
          <span>{`0${i + 1}`}</span>
        </div>
        <Card
          classNames={{
            title: `${cx("title_card")} subtitle-font-28-36-50`,
            description: cx("description_card"),
          }}
          title={block.title}
          description={block.description}
          fixedFontSize={{ description: "20" }}
        />
      </Grid>
    ));

  return (
    <div
      className={`${cx(
        "secure_scalable_decentralised_block"
      )} main_lateral_paddings main-top-margins`}
    >
      <div className={`${cx("title")} title-font`}>
        Secure. Scalable.
        <br />
        Decentralised.
      </div>
      <Grid container columns={miuCustomColumns} className={cx("body")}>
        <Grid item lg={6.91} xl={6.93}>
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 8, lg: 7, xl: 7 }}
            className={cx("blocks_wrapper")}
            // spacing={2}
            columnSpacing={{ xs: 2, lg: 0 }}
          >
            {secureScalableDecentralizedData && blocksGenerator()}
          </Grid>
        </Grid>
        <Grid item lg={5} className={cx("button_wrapper")}>
          {/* <Button
            name="Compare"
            withArrow
            onClick={() => navigate("/about")}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

import { secureScalableDecentralizedData } from "../../content";
import { miuCustomColumns } from "../../helpers";
import { Button, Card } from "../../components";

import * as styles from "./secure-scalable-decentralised.module.scss";

const cx = classNames.bind(styles);

export const SecureScalableDecentralisedBlock: React.FC = () => {
  const blocksGenerator = () =>
    secureScalableDecentralizedData.map((block, i) => (
      <Grid item xs={4} sm={2} md={4} lg={3.35} key={i} className={cx("block")}>
        <div className={cx("header")}>
          <div className={cx("indicator")}></div>
          <span>{`0${i + 1}`}</span>
        </div>
        <Card
          className={cx("secure_scalable_decentralised_card")}
          title={block.title}
          description={block.description}
          fixedFontSize={{ description: "20" }}
        />
      </Grid>
    ));

  return (
    <div className={cx("secure_scalable_decentralised_block")}>
      <div className={`${cx("title")} title-font`}>
        Secure. Scalable.
        <br />
        Decentralized.
      </div>
      <Grid container columns={miuCustomColumns} className={cx("body")}>
        <Grid item lg={7}>
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 8, lg: 7, xl: 7 }}
            className={cx("blocks_wrapper")}
            spacing={2}
          >
            {secureScalableDecentralizedData && blocksGenerator()}
          </Grid>
        </Grid>
        <Grid item lg={5} className={cx("button_wrapper")}>
          <Button name="Compare" withArrow />
        </Grid>
      </Grid>
    </div>
  );
};

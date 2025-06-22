import React from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

import { letsTalkSchema, miuCustomColumns } from "../../helpers";
import { Form } from "../../components/form";

import * as styles from "./lets-talk.module.scss";

const cx = classNames.bind(styles);

export const LetsTalkBlock: React.FC = () => {
  return (
    <div className={`${cx("lets_talk_block")} main-top-margins`}>
      <Grid container columns={miuCustomColumns} className={cx("grid")}>
        <Grid
          item
          xs={4}
          sm={3}
          md={4}
          lg={5}
          xl={5}
          className={cx("description")}
        >
          <div className={`${cx("title")} title-font`}>Let's talk</div>
          <span className="body-font">
          Have an idea, need help and guidance? <br />
            We are here for it.
          </span>
        </Grid>
        <Grid
          item
          xs={4}
          sm={3}
          md={4}
          lg={7}
          xl={6}
          className={cx("form-wrapper")}
        >
          <div className={`${cx("form_title")} font-50 prompt-regular`}>
            Make an inquiry
          </div>
          <Form
            withDefineYourself
            withHowWeCanHelp
            inOneRowMainInputs
            schema={letsTalkSchema}
          />
        </Grid>
      </Grid>
    </div>
  );
};

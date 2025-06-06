import React from "react";
import classNames from "classnames/bind";
import { Grid } from "@mui/material";

import { youCanParticipateBlockData } from "../../content";
import { miuCustomColumns } from "../../helpers";
import { Card, CustomLink } from "../../components";

import { ReactComponent as ArrowLinkIcon } from "../../assets/images/arrow_in_circle_link_icon.svg";

import * as styles from "./you-can-participate.module.scss";

// removed         <Grid item lg={7} className={`${cx("title")} title-font`}>
//          You are invited
//          </Grid>

const cx = classNames.bind(styles);

interface InputProps {
  className?: string;
  data: Array<{
    title: React.JSX.Element;
    description: string;
    Img: string;
    linkTo: string;
    externalLink?: boolean;
  }>;
}

export const YouCanParticipateBlock: React.FC<InputProps> = ({
  className,
  data,
}) => {
  return (
    <div className={`${cx("you_can_participate_block")} ${className}`}>
      <Grid
        container
        columns={miuCustomColumns}
        className={cx("title_wrapper")}
      >
      </Grid>

      <Grid container columns={miuCustomColumns}>
        <Grid item xs={4} md={6} lg={12} className={cx("sections_wrapper")}>
          {data &&
            data.map((sectionContent, i) => (
              <CustomLink
                key={i}
                linkTo={sectionContent.linkTo}
                isExternalLink={sectionContent?.externalLink}
              >
                <Grid
                  className={cx("section")}
                  container
                  columns={{ xs: 4, sm: 4, md: 6, lg: 12 }}
                >
                  <Grid className={cx("img_wrapper")} item xs={1} md={1} lg={5}>
                    <img src={sectionContent.Img} />
                  </Grid>
                  <Grid
                    className={cx("card_wrapper")}
                    item
                    xs={3}
                    md={5}
                    lg={5}
                  >
                    <Card
                      title={sectionContent.title}
                      description={sectionContent.description}
                      classNames={{
                        title: `${cx("card_title")} subtitle-font-28-36-50`,
                      }}
                    />
                  </Grid>
                  <Grid className={cx("arrow_link_wrapper")} item lg={2}>
                    <ArrowLinkIcon />
                  </Grid>
                </Grid>
              </CustomLink>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

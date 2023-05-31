import React, { useState } from "react";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Grid } from "@mui/material";

import { Timeline } from "../../components";
import { timelineData } from "../../content";

import * as styles from "./timeline-block.module.scss";

const cx = classNames.bind(styles);

export const TimelineBlock: React.FC = () => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  const label = (name: string, className: string) => (
    <div className={className}>{name}</div>
  );

  return (
    <div className={cx("timeline_block")}>
      <div className={`${cx("title")} title-font main-lateral-margins`}>
        Timeline
      </div>
      <Grid container className={cx("grid")}>
        <Grid
          item
          lg={3}
          className={cx("timeline_wrapper")}
          id="timeline_wrapper"
        >
          <Swiper
            slidesPerView={"auto"}
            className={cx("swiper")}
            direction="horizontal"
            modules={[FreeMode]}
            scrollbar={{
              el: ".swiper-scrollbar",
            }}
            freeMode={true}
          >
            <SwiperSlide className={cx("swiper_slide")}>
              <Timeline
                phases={timelineData}
                onPhaseClick={(index) => setSelectedPhaseIndex(index)}
                selectedPhaseIndex={selectedPhaseIndex}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item lg={9} className={cx("description_wrapper")}>
          <div className={`${cx("scrolled_info")} main-lateral-margins`}>
            {timelineData[selectedPhaseIndex]?.data &&
              timelineData[selectedPhaseIndex].data.map((item, i) => (
                <div className={cx("info_block")} key={i}>
                  {label(item.label, cx("label"))}
                  <div className={cx("body")}>
                    <div
                      className={`${cx("status", {
                        isGreen: item.status === "Done",
                      })} font-12`}
                    >
                      {item.status}
                    </div>
                    {label(item.label, cx("mobile_label"))}
                    <div className={`${cx("subtitle")} subtitle-font`}>
                      {item.title}
                    </div>

                    <div className={cx("description")}>{item.description}</div>
                  </div>
                </div>
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

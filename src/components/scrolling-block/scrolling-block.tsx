import React, { CSSProperties } from "react";
import classNames from "classnames/bind";

import { Card } from "..";
import { BreakpointNames } from "../../common/enums";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";

import * as styles from "./scrolling-block.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  title: string | React.ReactElement;
  data: Array<{
    title: string | React.ReactElement;
    description: string;
    img: string;
    style?: { title: { [key in BreakpointNames]?: CSSProperties } };
  }>;
  classNames?: { wrapper?: string; title: string };
}

export const ScrollingBlock: React.FC<InputProps> = ({
  title,
  data,
  classNames,
}) => {
  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => {
      breakpointDeterminator();
    },
  });

  return (
    <div className={`${cx("scrolling_block")} ${classNames?.wrapper}`}>
      <div className={`${cx("title")} title-font ${classNames?.title || ""}`}>
        {title}
      </div>
      <div className={cx("blocks")}>
        {data &&
          data.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              description={item.description}
              img={{ path: item.img }}
              counter={`0${i + 1}`}
              classNames={{
                card: cx("card"),
                mainContent: cx("main_content"),
                title: cx("card_title"),
                description: cx("card_description"),
                img: cx("card_img"),
                counter: cx("card_counter"),
              }}
              style={{
                title: pageSize ? item.style?.title?.[pageSize] : {},
              }}
            />
          ))}
      </div>
    </div>
  );
};

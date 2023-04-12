import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { getChartOptions, getChartData } from "../../helpers";
import { timelineQuarterLabels, timelineYearsData } from "../../content";
import { BorderWidthSizes, PageSizes } from "../../common/enums";
import { Button, Card } from "../../components";

import * as styles from "./timeline.module.scss";
import { Carousel } from "../carousel";

const cx = classNames.bind(styles);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const Timeline: React.FC = () => {
  const [isChartDispayed, setIsChartDispayed] = useState<boolean>(true);
  const [selectedIndexes, setSelectedIndexes] = useState<{
    year: number;
    quarter: number;
  }>({
    year: 4,
    quarter: 0,
  });

  const carouselItemCreator = (
    index: number,
    firstShowedIndex: number,
    isMobileSize: boolean,
    item: any,
    itemsLength: number,
    maximusShowed: number
  ) => {
    console.log(
      index,
      firstShowedIndex,
      isMobileSize,
      item,
      itemsLength,
      maximusShowed
    );
    return (
      <button
      key={index}
      className={cx("year", {
        grayBackground: selectedIndexes.year === index,
      })}
      onClick={() =>
        setSelectedIndexes((indexes) => ({ ...indexes, year: index }))
      }
    >
      {item.year}
    </button>
    );
  };

  const isChartDispayedHandler = () => {
    setIsChartDispayed(window.innerWidth > PageSizes.MOBILE);
  };

  useEffect(() => {
    isChartDispayedHandler();
    window.addEventListener("resize", isChartDispayedHandler);
    return () => {
      window.removeEventListener("resize", isChartDispayedHandler);
    };
  }, []);

  const selectedDataset = timelineYearsData[selectedIndexes.year].dataset;
  const selectedQuarterData =
    timelineYearsData[selectedIndexes.year].data[selectedIndexes.quarter];

  // todo add useMemo
  const pointBorderWidthCreator = (labels: Array<string>) => {
    const pointBorderWidthArray: Array<number> = [];
    labels.forEach((elem) =>
      pointBorderWidthArray.push(elem ? BorderWidthSizes.TIMELINE_POINT : 0)
    );
    return pointBorderWidthArray;
  };

  return (
    <div className={cx("timeline_wrapper")}>
      <span className={cx("title")}>Timeline</span>
      {isChartDispayed ? (
        <div className={cx("timeline")}>
          <div className={cx("header_wrapper")}>
            <div className={cx("header")}>
              <span>Last updated 3 November</span>
            </div>
          </div>
          <div className={cx("line_wrapper")}>
            <Line
              width="100%"
              height="100%"
              data={getChartData(timelineQuarterLabels, selectedDataset)}
              options={getChartOptions(
                timelineYearsData[selectedIndexes.year].data,
                pointBorderWidthCreator(timelineQuarterLabels)
              )}
            />
          </div>
          <div className={cx("years_wrapper")}>
            {timelineYearsData &&
              timelineYearsData.map((yearData, i) => (
                <button
                  key={i}
                  className={cx("year", {
                    grayBackground: selectedIndexes.year === i,
                  })}
                  onClick={() =>
                    setSelectedIndexes((indexes) => ({ ...indexes, year: i }))
                  }
                >
                  {yearData.year}
                </button>
              ))}
          </div>
        </div>
      ) : (
        <>
          <Card
            img={selectedQuarterData.img}
            description={selectedQuarterData.description}
            title={selectedQuarterData.title}
            isTimeline={true}
          >
            <div className={cx("buttons")}>
              <Button
                name="Back"
                isWhite={true}
                isNotWide={true}
                onClick={() =>
                  setSelectedIndexes((indexes) => ({
                    ...indexes,
                    quarter: !indexes.quarter
                      ? indexes.quarter
                      : indexes.quarter - 1,
                  }))
                }
              />
              <Button
                name="Next"
                isWhite={true}
                isNotWide={true}
                onClick={() =>
                  setSelectedIndexes((indexes) => ({
                    ...indexes,
                    quarter:
                      indexes.quarter ===
                      timelineYearsData[selectedIndexes.year].data.length - 1
                        ? indexes.quarter
                        : indexes.quarter + 1,
                  }))
                }
              />
            </div>
          </Card>
          <Carousel
            items={timelineYearsData}
            carouselName="timeline"
            slideMinWidth={125}
            showedProp={3}
            carouselItemCreator={carouselItemCreator}
          />
        </>
      )}
    </div>
  );
};

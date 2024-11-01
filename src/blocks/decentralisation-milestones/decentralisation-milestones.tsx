import React, { useState } from "react";
import classNames from "classnames/bind";

import { Button, CustomLink } from "../../components";
import { ExternalLinks, PageSizes } from "../../common/enums";
import { decentralisationMilestonesData } from "../../content/decentralisation-milestones";
import { useResizeEvent } from "../../hooks";

import * as styles from "./decentralisation-milestones.module.scss";

const cx = classNames.bind(styles);

export const DecentralisationMilestonesBlock: React.FC = ({}) => {
  const [openedTaskIndex, setOpenedTaskIndex] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  useResizeEvent({
    resizeHandler: () => {
      setPageSize(window.innerWidth);
      window.innerWidth >= PageSizes.DESKTOP &&
        setOpenedTaskIndex((openedTaskIndex) =>
          openedTaskIndex === -1 ? 0 : openedTaskIndex
        );
    },
  });

  const taskHeader = (index: number, taskName: string) => (
    <div
      className={cx("task_header", { isActive: openedTaskIndex === index })}
      onClick={() =>
        setOpenedTaskIndex((openedTaskIndex) =>
          openedTaskIndex === index && pageSize < PageSizes.DESKTOP ? -1 : index
        )
      }
    >
      <div className={`${cx("label")} inter_400`}>{index + 1}</div>
      <div className={`${cx("task_name")} subtitle-font-28-36`}>{taskName}</div>
    </div>
  );

  const taskDescription = (title: string, body: React.JSX.Element) => (
    <div className={cx("task_description")}>
      <div className={`${cx("title")} subtitle-font-28-36`}>{title}</div>
      <div className={`${cx("body")} body-font`}>{body}</div>
      <CustomLink
        isExternalLink
        linkTo={ExternalLinks.START_CONTRIBUTING_JOIN_BUTTON}
      >
        <Button name="Join" isGradientAdded />
      </CustomLink>
    </div>
  );

  return (
    <div className={`${cx("decentralisation_milestones_block")} main_lateral_paddings`}>
      <div className={`${cx("title")} title-font`}>
      <br />
        Technical Milestones
        <br />
        <br />
      </div>
      <div className={cx("rewards_content")}>
        <div className={cx("mobile_tasks")}>
          {decentralisationMilestonesData.length &&
            decentralisationMilestonesData.map((task, i) => (
              <div className={cx("task", { isActive: openedTaskIndex === i })}>
                {taskHeader(i, task.taskName)}
                {openedTaskIndex === i &&
                  taskDescription(
                    task.description.title,
                    task.description.body
                  )}
              </div>
            ))}
        </div>
        <div className={cx("desktop_tasks")}>
          {decentralisationMilestonesData.length &&
            decentralisationMilestonesData[openedTaskIndex] && (
              <>
                <div className={cx("tasks_list")}>
                  {decentralisationMilestonesData.map((task, i) =>
                    taskHeader(i, task.taskName)
                  )}
                </div>
                {taskDescription(
                  decentralisationMilestonesData[openedTaskIndex].description.title,
                  decentralisationMilestonesData[openedTaskIndex].description.body
                )}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

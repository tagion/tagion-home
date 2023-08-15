import React, { useState } from "react";
import classNames from "classnames/bind";

import { Button, CustomLink } from "../../components";
import { ExternalLinks } from "../../common/enums/external_links";
import { startContributingData } from "../../content";

import * as styles from "./start-contributing.module.scss";

const cx = classNames.bind(styles);

export const StartContributingBlock: React.FC = ({}) => {
  const [openedTaskIndex, setOpenedTaskIndex] = useState(0);

  const taskHeader = (index: number, taskName: string) => (
    <div
      className={cx("task_header", { isActive: openedTaskIndex === index })}
      onClick={() =>
        setOpenedTaskIndex((openedTaskIndex) =>
          openedTaskIndex === index ? -1 : index
        )
      }
    >
      <div className={`${cx("label")} inter-400`}>{index + 1}</div>
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
    <div className={`${cx("start_contributing_block")} main-lateral-paddings`}>
      <div className={`${cx("title")} title-font`}>
        Start contributing
        <br />
        and receive rewards
      </div>
      <div className={cx("rewards_content")}>
        <div className={cx("mobile_tasks")}>
          {startContributingData.length &&
            startContributingData.map((task, i) => (
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
          {startContributingData.length &&
            startContributingData[openedTaskIndex] && (
              <>
                <div className={cx("tasks_list")}>
                  {startContributingData.map((task, i) =>
                    taskHeader(i, task.taskName)
                  )}
                </div>
                {taskDescription(
                  startContributingData[openedTaskIndex].description.title,
                  startContributingData[openedTaskIndex].description.body
                )}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

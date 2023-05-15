import React from "react";
import classNames from "classnames/bind";

import { Button, TagionMonitorInfo } from "../../components";

import * as styles from "./explore-our-ecosystem.module.scss";

const cx = classNames.bind(styles);

export const ExploreOurEcosystemBlock: React.FC = ({}) => {
  return (
    <div className={cx("explore_our_ecosystem_block")}>
      <div className={`${cx("title")} title-font`}>Explore our ecosystem</div>
      <div className={cx("body")}>
        <div className={`${cx("description")} body-font`}>
          We are live and evolving.
          <br />
          Tagion Monitor is a graph explorer and analytics platform. It's an
          interface to view and track the Tagion Hashgraph, transactions and
          DART database.
        </div>
        <div className={cx("tagionMonitorInfo_wrapper")}>
          <TagionMonitorInfo />
          <Button name="Tagion Monitor" withArrow />
        </div>
      </div>
    </div>
  );
};

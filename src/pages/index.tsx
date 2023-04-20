import React from "react";
import classNames from "classnames/bind";

import { Layout } from "../templates/layout";
import { Card } from "../components";

import * as styles from "../styles/pages/index.module.scss";
import { nextGennFinancialInfrastrucureData } from "../content";

const cx = classNames.bind(styles);

const IndexPage = () => {
  return (
    <Layout>
      <div className={cx("financial_infrastrucure_next_gen")}>
        <div className={cx("title")}>
          Next generation financial infrastrucure
        </div>
        <div className={cx("blocks")}>
          {nextGennFinancialInfrastrucureData &&
            nextGennFinancialInfrastrucureData.map((item) => (
              <Card
                title={item.title}
                description={item.description}
                img={item.img}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export { Head } from "../components/head";

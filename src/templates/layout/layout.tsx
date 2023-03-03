import * as React from "react";
import classNames from "classnames/bind";

import { Footer, Header } from "../../components";

import * as styles from "./layout.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  children: React.ReactNode;
};

export const Layout: React.FC<InputProps> = ({ children }) => {
  return (
    <div className={cx("layout")}>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

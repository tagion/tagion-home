import * as React from "react";
import classNames from "classnames/bind";
import { ThemeProvider } from "@mui/material/styles";

import { Footer, Header } from "../../components";
import { theme } from "../../helpers";

import * as styles from "./layout.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  children: React.ReactNode;
}

export const Layout: React.FC<InputProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={cx("layout")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

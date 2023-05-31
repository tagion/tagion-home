import * as React from "react";
import classNames from "classnames/bind";
import { ThemeProvider } from "@mui/material/styles";

import { Footer, Header } from "../../components";
import { theme } from "../../helpers";
import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./layout.module.scss";

const cx = classNames.bind(styles);

console.log("GATSBY_ENV: ", process.env.GATSBY_ENV);
console.log(
  "GATSBY_GOOGLE_ANALYTICS_ID: ",
  process.env.GATSBY_GOOGLE_ANALYTICS_ID
);
console.log(
  "GATSBY_MAIL_SERVICE_ENDPOINT: ",
  process.env.GATSBY_MAIL_SERVICE_ENDPOINT
);

interface InputProps {
  withPaddingTop?: boolean;
  withPaddingBottom?: boolean;
  isHeaderShownOnTop?: boolean;
}

export const Layout: React.FC<PropsWithChildren<InputProps>> = ({
  withPaddingTop = true,
  withPaddingBottom,
  isHeaderShownOnTop,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={cx("layout", { withPaddingTop, withPaddingBottom })}>
        <Header isHeaderShownOnTop={isHeaderShownOnTop} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

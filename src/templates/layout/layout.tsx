import * as React from "react";
import classNames from "classnames/bind";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "../../components";
import { theme } from "../../helpers";
import { PropsWithChildren } from "../../common/types/props-with-children.type";

import * as styles from "./layout.module.scss";

const cx = classNames.bind(styles);

// console.log("1: ", process.env.GATSBY_ENV);
// console.log(
//   "2: ",
//   process.env.GATSBY_GOOGLE_ANALYTICS_ID
// );
// console.log(
//   "3: ",
//   process.env.GATSBY_MAIL_SERVICE_ENDPOINT
// );

interface InputProps {
  withPaddingTop?: boolean;
  withPaddingBottom?: boolean;
  withoutFooter?: boolean;
  isHeaderShownOnTop?: boolean;
  is100PercentHeight?: boolean;
  isPageWithDarkBackground?: boolean;
}

export const Layout: React.FC<PropsWithChildren<InputProps>> = ({
  withPaddingTop = true,
  withPaddingBottom,
  withoutFooter,
  isHeaderShownOnTop,
  is100PercentHeight,
  isPageWithDarkBackground,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        className={cx("layout", {
          withPaddingTop,
          withPaddingBottom,
          is100PercentHeight,
        })}
      >
        <Header
          isHeaderShownOnTop={isHeaderShownOnTop}
          isPageWithDarkBackground={isPageWithDarkBackground}
        />
        <main>{children}</main>
        {!withoutFooter && <Footer />}
      </div>
      <ToastContainer
        autoClose={3000}
        closeOnClick={false}
        closeButton={false}
        draggable={false}
        icon={false}
        hideProgressBar={true}
        limit={1}
        className={cx("toast_container")}
      />
    </ThemeProvider>
  );
};

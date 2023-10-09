import React, { useState } from "react";
import classNames from "classnames/bind";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

import { useResizeEvent } from "../../hooks";
import { Footer, Header } from "../../components";
import { theme } from "../../helpers";
import { PropsWithChildren } from "../../common/types/props-with-children.type";
import { BreakpointNames } from "../../common/enums";

import * as styles from "./layout.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  withPaddingTop?: boolean;
  withPaddingBottom?: boolean;
  withoutFooter?: boolean;
  isHeaderShownOnTop?: boolean;
  isPageWithDarkBackground?: boolean;
  scrollHeightForTransparentHeader?: Partial<Record<BreakpointNames, number>>;
}

export const Layout: React.FC<PropsWithChildren<InputProps>> = ({
  withPaddingTop = true,
  withPaddingBottom,
  withoutFooter,
  isHeaderShownOnTop,
  isPageWithDarkBackground,
  scrollHeightForTransparentHeader,
  children,
}) => {
  const [mainMinHeight, setMainMinHeight] = useState("");

  useResizeEvent({
    resizeHandler: () => {
      const footerElement = document.getElementById("footer");
      const footerOffsetHeight = footerElement?.offsetHeight;

      setMainMinHeight(() =>
        footerOffsetHeight ? `calc(100vh - ${footerOffsetHeight}px)` : ""
      );
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className={cx("layout", {
          withPaddingTop,
          withPaddingBottom,
        })}
      >
        <Header
          isHeaderShownOnTop={isHeaderShownOnTop}
          isPageWithDarkBackground={isPageWithDarkBackground}
          scrollHeightForTransparentHeader={scrollHeightForTransparentHeader}
        />
        <main
          style={{
            minHeight: mainMinHeight,
          }}
        >
          {children}
        </main>
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

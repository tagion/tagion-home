import { useState } from "react";
import { BreakpointNames, PageSizes } from "../common/enums";

type PageSizesType = `${BreakpointNames}` | "";

export const usePageBreakpointDeterminator = () => {
  const [pageSize, setPageSize] = useState<PageSizesType>("");

  const breakpointDeterminator = () => {
    if (window.innerWidth < PageSizes.TABLET) {
      setPageSize(BreakpointNames.MOBILE);
    } else if (
      window.innerWidth >= PageSizes.TABLET &&
      window.innerWidth < PageSizes.DESKTOP
    ) {
      setPageSize(BreakpointNames.TABLET);
    } else if (
      window.innerWidth >= PageSizes.DESKTOP &&
      window.innerWidth < PageSizes.DESKTOP_LARGE
    ) {
      setPageSize(BreakpointNames.DESKTOP);
    } else if (
      window.innerWidth >= PageSizes.DESKTOP_LARGE &&
      window.innerWidth < PageSizes.DESKTOP_MAX
    ) {
      setPageSize(BreakpointNames.DESKTOP_LARGE);
    } else if (window.innerWidth >= PageSizes.DESKTOP_MAX) {
      setPageSize(BreakpointNames.DESKTOP_MAX);
    }
  };

  return { pageSize, setPageSize, breakpointDeterminator };
};

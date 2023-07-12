import { useEffect } from "react";

export const useResizeEvent = ({
  resizeHandler,
}: {
  resizeHandler: () => void;
}) => {
  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", (e) => {
      resizeHandler();
    });

    return () => window.removeEventListener("resize", () => resizeHandler());
  }, []);
};

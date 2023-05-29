import "./src/styles/index.scss";

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer");
  }
};

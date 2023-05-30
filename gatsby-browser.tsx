import "./src/styles/index.scss";

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    console.log(
      'typeof IntersectionObserver === "undefined',
      typeof IntersectionObserver === "undefined"
    );
    await import("intersection-observer");
  }
};

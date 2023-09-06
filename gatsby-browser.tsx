import "./src/styles/index.scss";

export const onClientEntry = () => {
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
};

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);
  return false;
};

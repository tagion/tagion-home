import "./src/styles/index.scss";

export const onInitialClientRender = () => {
  console.log("test - onInitialClientRender was executed");
  window.scrollTo(0, 0);
};

export const shouldUpdateScroll = () => {
  console.log("test - shouldUpdateScroll was executed");
  window.scrollTo(0, 0);
  return false;
};

import "./src/styles/index.scss";

export const onClientEntry = () => {
  console.log(
    "---------------test - onClientEntry was executed---------------"
  );
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
  const scrollRestoration = history.scrollRestoration;
  console.log("test: --onClientEntry-- scrollRestoration =", scrollRestoration);
  if (scrollRestoration === "manual") {
    console.log(
      "test: --onClientEntry-- The location on the page is not restored, user will need to scroll manually."
    );
  }
  // window.scrollTo(0, 0);
};

// export const onInitialClientRender = () => {
//   console.log("test - onInitialClientRender was executed");
//   if (history.scrollRestoration) {
//     history.scrollRestoration = "manual";
//   }
//   const scrollRestoration = history.scrollRestoration;
//   console.log(
//     "test onInitialClientRender scrollRestoration",
//     scrollRestoration
//   );
//   if (scrollRestoration === "manual") {
//     console.log(
//       "test onInitialClientRender- The location on the page is not restored, user will need to scroll manually."
//     );
//   }
//   // window.scrollTo(0, 0);
// };

export const shouldUpdateScroll = () => {
  console.log(
    "---------------test - shouldUpdateScroll was executed---------------"
  );
  const scrollRestoration = history.scrollRestoration;
  console.log(
    "test --shouldUpdateScroll-- scrollRestoration =",
    scrollRestoration
  );
  if (scrollRestoration === "manual") {
    console.log(
      "test: --shouldUpdateScroll-- - The location on the page is not restored, user will need to scroll manually."
    );
  }
  window.scrollTo(0, 0);
  return false;
};

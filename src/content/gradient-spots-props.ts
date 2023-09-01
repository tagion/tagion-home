export const mainPageGradients = {
  introductoryBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/introductory_block_1920.png")
          .default,

      options: {},
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/introductory_block_1440.png")
          .default,

      options: {},
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/introductory_block_1024.png")
          .default,

      options: {},
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/introductory_block_600.png")
          .default,

      options: {},
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/introductory_block_280.png")
          .default,

      options: { bgSize: "100% 103%" },
    },
  },
  secureScalableDecentralisedBlockGradient: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/secure_block_1920.png")
          .default,

      options: {
        bgSize: "80% 80%",
        bgPositionX: "right",
        bgPositionY: "5%",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/secure_block_1440.png")
          .default,

      options: {
        bgSize: "80% 80%",
        bgPositionX: "right",
        bgPositionY: "15%",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/secure_block_1024.png")
          .default,

      options: {
        bgSize: "80% 80%",
        bgPositionX: "right",
        bgPositionY: "58%",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/secure_block_600.png")
          .default,

      options: { bgSize: "100% 65%", bgPositionY: "42%" },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/secure_block_280.png")
          .default,

      options: { bgSize: "100% 48%", bgPositionY: "53%" },
    },
  },
  subscribeToNewsletterBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/subscribe_block_1920.png")
          .default,

      options: {
        bgPositionY: "320px",
        bgSize: "90% 100%",
        bgPositionX: "left",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/subscribe_block_1440.png")
          .default,

      options: { bgPositionY: "320px" },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/subscribe_block_1024.png")
          .default,

      options: { bgPositionY: "390px" },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/subscribe_block_600.png")
          .default,

      options: { bgPositionY: "526px", bgSize: "100% 80%" },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/subscribe_block_280.png")
          .default,

      options: { bgPositionY: "526px", bgSize: "100% 80%" },
    },
  },
};

export const sideMenuGradients = {
  desktop: {
    img: () =>
      require("../assets/images/gradient/side-menu/desktop/side-menu_1024.png")
        .default,
    options: { bgPositionY: "bottom" },
  },
  tablet: {
    img: () =>
      require("../assets/images/gradient/side-menu/tablet/side-menu_600.png")
        .default,
    options: { bgPositionY: "bottom", bgSize: "100% 74%" },
  },
  mobile: {
    img: () =>
      require("../assets/images/gradient/side-menu/mobile/side-menu_280.png")
        .default,
    options: { bgPositionY: "bottom", bgSize: "100% 54%" },
  },
};

// todo fix the logic of breakpoints
const toastifyMessageGradient = {
  img: (isSuccess?: boolean): string =>
    require(isSuccess
      ? "../assets/images/gradient/toastify-messages/success.png"
      : "../assets/images/gradient/toastify-messages/error.png").default,
};

export const toastifyMessageGradients = {
  desktop_max: toastifyMessageGradient,
  desktop_large: toastifyMessageGradient,
  desktop: toastifyMessageGradient,
  tablet: toastifyMessageGradient,
  mobile: toastifyMessageGradient,
};

export const aboutPageGradients = {
  ourValuesBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-max/our_values_1920.png")
          .default,

      options: {
        bgSize: "40% 1206px",
        bgPositionY: "top",
        bgPositionX: "right",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-large/our_values_1440.png")
          .default,

      options: {
        bgSize: "50% 1258px",
        bgPositionY: "top",
        bgPositionX: "right",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop/our_values_1024.png")
          .default,

      options: {
        bgSize: "40% 914px",
        bgPositionY: "top",
        bgPositionX: "right",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/about-page/tablet/our_values_600.png")
          .default,

      options: {
        bgSize: "400px 808px",
        bgPositionY: "top",
        bgPositionX: "right",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/about-page/mobile/our_values_280.png")
          .default,

      options: {
        bgSize: "280px 870px",
        bgPositionY: "top",
        bgPositionX: "right",
      },
    },
  },
  foundationBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-max/foundation_1920.png")
          .default,

      options: {
        bgSize: "45% 100%",
        bgPositionX: "right",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-large/foundation_1440.png")
          .default,

      options: {
        bgSize: "55% 100%",
        bgPositionX: "right",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop/foundation_1024.png")
          .default,

      options: {
        bgSize: "70% 100%",
        bgPositionX: "right",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/about-page/tablet/foundation_600.png")
          .default,
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/about-page/mobile/foundation_280.png")
          .default,
    },
  },
  valuePartnersBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-max/value_partners_1920.png")
          .default,

      options: {
        bgPositionY: "280px",
        bgSize: "90% 1600px",
        bgPositionX: "right",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-large/value_partners_1440.png")
          .default,

      options: {
        bgPositionY: "320px",
        bgSize: "100% 1600px",
        bgPositionX: "right",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop/value_partners_1024.png")
          .default,

      options: {
        bgPositionY: "120px",
        bgSize: "80% 1000px",
        bgPositionX: "right",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/about-page/tablet/value_partners_600.png")
          .default,
      options: {
        bgPositionY: "90px",
        bgSize: "100% 1000px",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/about-page/mobile/value_partners_280.png")
          .default,
      options: {
        bgPositionY: "280px",
        bgSize: "100% 800px",
      },
    },
  },
  natureIsOurClientBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-max/nature_is_our_client_1920.png")
          .default,

      options: {
        bgPositionY: "bottom",
        bgSize: "70% 1600px",
        bgPositionX: "right",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-large/nature_is_our_client_1440.png")
          .default,

      options: {
        bgPositionY: "bottom",
        bgSize: "80% 1700px",
        bgPositionX: "right",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop/nature_is_our_client_1024.png")
          .default,

      options: {
        bgPositionY: "bottom",
        bgSize: "66% 1000px",
        bgPositionX: "right",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/about-page/tablet/nature_is_our_client_600.png")
          .default,
      options: {
        bgPositionY: "-680px",
        bgSize: "90% 1050px",
        bgPositionX: "right",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/about-page/mobile/nature_is_our_client_280.png")
          .default,
      options: {
        bgPositionY: "-830px",
        bgSize: "100% 1300px",
      },
    },
  },
};

export const getTagionsPageGradients = {
  introductoryBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/introductory_block_1920.png")
          .default,

      options: {
        bgSize: "100% 85%",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/introductory_block_1440.png")
          .default,

      options: {
        bgSize: "100% 88%",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/introductory_block_1024.png")
          .default,

      options: {
        bgSize: "80% 70%",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/introductory_block_600.png")
          .default,
      options: {
        bgSize: "100% 70%",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/introductory_block_280.png")
          .default,

      options: {
        bgSize: "100% 50%",
      },
    },
  },
  subscribeToNewsletterBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/subscribe_block_1920.png")
          .default,

      options: {
        bgPositionY: "420px",
        bgSize: "90% 100%",
        bgPositionX: "left",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/subscribe_block_1440.png")
          .default,

      options: { bgPositionY: "400px" },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/subscribe_block_1024.png")
          .default,

      options: { bgPositionY: "20px", bgSize: "100% 100%" },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/subscribe_block_600.png")
          .default,

      options: { bgPositionY: "50px", bgSize: "100% 110%" },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/subscribe_block_280.png")
          .default,

      options: {
        bgPositionY: "140px",
        bgSize: "100% 120%",
      },
    },
  },

  buyEarnTagionBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-max/foundation_1920.png")
          .default,

      options: {
        bgSize: "850px 100%",
        bgPositionX: "100px",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop-large/foundation_1440.png")
          .default,

      options: {
        bgSize: "1180px 100%",
        bgPositionX: "-100px",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop/foundation_1024.png")
          .default,

      options: {
        bgSize: "60% 100%",
        bgPositionX: "right",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/about-page/tablet/foundation_600.png")
          .default,
      options: {
        bgSize: "80% 100%",
        bgPositionX: "right",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/about-page/mobile/foundation_280.png")
          .default,
    },
  },

  submitModal: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/get-tagions-page/desktop-max/modal_1920.png")
          .default,

      options: {
        bgSize: "75% 67%",
        bgPositionY: "bottom",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/get-tagions-page/desktop-large/modal_1440.png")
          .default,

      options: {
        bgSize: "90% 63%",
        bgPositionY: "bottom",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/get-tagions-page/desktop/modal_1024.png")
          .default,

      options: {
        bgSize: "70% 63%",
        bgPositionY: "bottom",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/get-tagions-page/tablet/modal_600.png")
          .default,
      options: {
        bgSize: "93% 40%",
        bgPositionY: "bottom",
        bgPositionX: "right",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/get-tagions-page/mobile/modal_280.png")
          .default,
      options: {
        bgSize: "100% 25%",
        bgPositionY: "bottom",
      },
    },
  },
};

export const ecosystemPageGradients = {
  introductoryBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/introductory_block_1920.png")
          .default,

      options: {
        bgSize: "100% 80%",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/introductory_block_1440.png")
          .default,
      options: {
        bgSize: "100% 80%",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/introductory_block_1024.png")
          .default,

      options: {
        bgSize: "90% 900px",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/introductory_block_600.png")
          .default,

      options: {
        bgSize: "100% 1000px",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/introductory_block_280.png")
          .default,
      options: {
        bgSize: "100% 750px",
      },
    },
  },
  iElasticDecentralisedBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-large/inclusive-elastic_1440.png")
          .default,

      options: {
        bgPositionY: "-2px",
        bgSize: "103% 104px",
        bgPositionX: "-2px",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-large/inclusive-elastic_1440.png")
          .default,

      options: {
        bgPositionY: "-2px",
        bgSize: "103% 104px",
        bgPositionX: "-2px",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-large/inclusive-elastic_1440.png")
          .default,

      options: {
        bgPositionY: "-2px",
        bgSize: "103% 102px",
        bgPositionX: "-2px",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-large/inclusive-elastic_1440.png")
          .default,

      options: {
        bgPositionY: "-2px",
        bgSize: "103% 102px",
        bgPositionX: "-2px",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-large/inclusive-elastic_1440.png")
          .default,

      options: {
        bgPositionY: "-2px",
        bgSize: "103% 102px",
        bgPositionX: "-2px",
      },
    },
  },
  subscribeToNewsletterBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/subscribe_block_1920.png")
          .default,

      options: {
        bgPositionY: "700px",
        bgSize: "90% 80%",
        bgPositionX: "left",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/subscribe_block_1440.png")
          .default,

      options: { bgPositionY: "700px", bgSize: "100% 75%" },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/subscribe_block_1024.png")
          .default,

      options: { bgPositionY: "150px" },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/subscribe_block_600.png")
          .default,

      options: { bgPositionY: "300px", bgSize: "100% 91%" },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/subscribe_block_280.png")
          .default,

      options: { bgPositionY: "526px", bgSize: "100% 80%" },
    },
  },

  ecosystemVisualizationBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-max/ecosystem_visualization_1920.png")
          .default,

      options: {
        bgPosition: "bottom -1400px right 0",
        bgSize: "100% 2500px",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/ecosystem/desktop-max/ecosystem_visualization_1920.png")
          .default,

      options: {
        bgPosition: "bottom -680px right 0",
        bgSize: "1500px 1400px",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/about-page/desktop/value_partners_1024.png")
          .default,

      options: {
        bgPosition: "bottom -620px right 0",
        bgSize: "1000px 1200px",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/ecosystem/tablet/ecosystem_visualization_600.png")
          .default,
      options: {
        bgPosition: "bottom -600px left 0",
        bgSize: "100% 1000px",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/about-page/mobile/value_partners_280.png")
          .default,
      options: {
        bgPosition: "bottom -470px left 0",
        bgSize: "100% 800px",
      },
    },
  },
};

export const communityPageGradients = {
  introductoryBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-max/introductory_block_1920.png")
          .default,

      options: {
        bgSize: "100% 75%",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop-large/introductory_block_1440.png")
          .default,
      options: {
        bgSize: "100% 75%",
      },
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/main-page/desktop/introductory_block_1024.png")
          .default,

      options: {
        bgSize: "90% 65%",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/main-page/tablet/introductory_block_600.png")
          .default,

      options: {
        bgSize: "100% 50%",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/main-page/mobile/introductory_block_280.png")
          .default,
      options: {
        bgSize: "100% 38%",
      },
    },
  },
  tweetsAboutTagionBlock: {
    desktop_max: {
      img: () =>
        require("../assets/images/gradient/community-page/desktop-max/tweets_about_tagion_1920.png")
          .default,

      options: {
        bgSize: "100% 110%",
        bgPositionY: "bottom",
      },
    },
    desktop_large: {
      img: () =>
        require("../assets/images/gradient/community-page/desktop-large/tweets_about_tagion_1440.png")
          .default,
      options: {},
    },
    desktop: {
      img: () =>
        require("../assets/images/gradient/community-page/desktop/tweets_about_tagion_1024.png")
          .default,

      options: {
        bgSize: "100% 105%",
        bgPositionY: "bottom",
      },
    },
    tablet: {
      img: () =>
        require("../assets/images/gradient/community-page/tablet/tweets_about_tagion_600.png")
          .default,

      options: {
        bgSize: "100% 120%",
        bgPositionY: "bottom",
      },
    },
    mobile: {
      img: () =>
        require("../assets/images/gradient/community-page/mobile/tweets_about_tagion_280.png")
          .default,
      options: {
        bgSize: "100% 130%",
        bgPositionY: "bottom",
      },
    },
  },
};

export const notFoundPageGradient = {
  desktop_max: {
    img: () =>
      require("../assets/images/gradient/404/desktop-max/gradient_1920.png")
        .default,

    options: {
      bgSize: "2930px 2402px",
      bgPosition: "top calc(50% + 400px) right -1800px",
    },
  },
  desktop_large: {
    img: () =>
      require("../assets/images/gradient/404/desktop-large/gradient_1440.png")
        .default,
    options: {
      bgSize: "1963px 1610px",
      bgPosition: "top calc(50% + 300px) right -1170px",
    },
  },
  desktop: {
    img: () =>
      require("../assets/images/gradient/404/desktop/gradient_1024.png")
        .default,

    options: {
      bgSize: "2686px 2202px",
      bgPosition: "top calc(50% + 650px) right -1640px",
    },
  },
  tablet: {
    img: () =>
      require("../assets/images/gradient/404/tablet/gradient_600.png").default,

    options: {
      bgSize: "1155px 1468px",
      bgPosition: "top calc(50% + 420px) right -620px",
    },
  },
  mobile: {
    img: () =>
      require("../assets/images/gradient/404/mobile/gradient_280.png").default,
    options: {
      bgSize: "694px 883px",
      bgPosition: "top calc(50% + 220px) right -400px",
    },
  },
};

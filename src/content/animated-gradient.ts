import classNames from "classnames/bind";

import { BreakpointNames, GradientColorsName } from "../common/enums";

import phitoGreenGradient from "../assets/images/gradient/phito_green_gradient.png";
import ionicMintGradient from "../assets/images/gradient/ionic_mint_gradient.png";
import ozoneBlueGradient from "../assets/images/gradient/ozone_blue_gradient.png";
import spaceBlueGradient from "../assets/images/gradient/space_blue_gradient.png";

import * as styles from "../wrappers/animated-gradient-wrapper/animated-gradient-wrapper.module.scss";

const cx = classNames.bind(styles);

export const gradientGenerator = (pageSize: string) => {
  const style = (id: GradientColorsName) => {
    const width = gsapHandlerData[pageSize][id].width;
    return {
      width: `${width}px`,
      top: `-${width / 2}px`,
      left: `-${width / 2}px`,
    };
  };

  return [
    {
      id: GradientColorsName.PHITO_GREEN,
      className: cx("phito_green", "gradient"),
      imgSrc: phitoGreenGradient,
      style: style(GradientColorsName.PHITO_GREEN),
    },
    {
      id: GradientColorsName.IONIC_MINT,
      className: cx("ionic_mint", "gradient"),
      imgSrc: ionicMintGradient,
      style: style(GradientColorsName.IONIC_MINT),
    },

    {
      id: GradientColorsName.OZONE_BLUE,
      className: cx("ozone_blue", "gradient"),
      imgSrc: ozoneBlueGradient,
      style: style(GradientColorsName.OZONE_BLUE),
    },

    {
      id: GradientColorsName.SPACE_BLUE,
      className: cx("space_blue", "gradient"),
      imgSrc: spaceBlueGradient,
      style: style(GradientColorsName.SPACE_BLUE),
    },
  ];
};

const desktopMaxData = {
  phito_green: {
    width: 1400,
    gradient: phitoGreenGradient,
    motionPath: [
      { x: 250, y: -280, rotation: 0, scale: 1 },
      { x: 1000, y: -50, rotation: -10, scale: 1.6 },
      { x: 230, y: 100, rotation: -100, scale: 1.65 },
      { x: 30, y: 10, rotation: -10, scale: 1.3 },
      { x: 150, y: -200, rotation: 0, scale: 1 },
      { x: 250, y: -280, rotation: 0, scale: 1 },
    ],
  },
  ionic_mint: {
    width: 1300,
    gradient: ionicMintGradient,
    motionPath: [
      { x: 410, y: 60, rotation: 0 },
      { x: 410, y: 0, rotation: 0 },
      { x: 390, y: 30, rotation: 0 },
      { x: 410, y: 10, rotation: 0 },
      { x: 500, y: 10, rotation: 0 },
      { x: 410, y: 60, rotation: 0 },
    ],
  },
  ozone_blue: {
    width: 1800,
    gradient: ozoneBlueGradient,
    motionPath: [
      { x: -100, y: 400, rotation: 0, scale: 1 },
      { x: 620, y: 200, rotation: 30, scale: 1.19 },
      { x: 600, y: 320, rotation: 0, scale: 1.19 },
      { x: 280, y: 180, rotation: 20, scale: 0.86 },
      { x: -85, y: 400, rotation: 0, scale: 1 },
      { x: -100, y: 400, rotation: 0, scale: 1 },
    ],
  },
  space_blue: {
    width: 1450,
    gradient: spaceBlueGradient,
    motionPath: [
      { x: 100, y: 680, rotation: 0, scale: 1 },
      { x: 882, y: 480, rotation: 75, scale: 1 },
      { x: 980, y: 90, rotation: 0, scale: 1.31 },
      { x: 500, y: 500, rotation: -10, scale: 1 },
      { x: 150, y: 450, rotation: -160, scale: 1 },
      { x: 100, y: 680, rotation: 0, scale: 1 },
    ],
  },
};

const desktopLargeDataGenerator = () => {
  const desktopLargeData = {} as typeof desktopMaxData;
  for (const [key, value] of Object.entries(desktopMaxData)) {
    const mappedMotionPath = value.motionPath.map((animationStage) => ({
      ...animationStage,
      x: animationStage.x * 0.75,
      y: animationStage.y * 0.75,
    }));
    Object.assign(desktopLargeData, {
      [key]: {
        ...value,
        motionPath: mappedMotionPath,
        width: value.width * 0.75,
      },
    });
  }
  return desktopLargeData;
};

export const gsapHandlerData = {
  [BreakpointNames.DESKTOP_MAX as string]: desktopMaxData,
  [BreakpointNames.DESKTOP_LARGE as string]: desktopLargeDataGenerator(),
};

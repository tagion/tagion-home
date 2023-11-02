import classNames from "classnames/bind";

import { BreakpointNames, GradientColorsName } from "../common/enums";

import phitoGreenGradient from "../assets/images/gradient/phito_green_gradient.png";
import ionicMintGradient from "../assets/images/gradient/ionic_mint_gradient.png";
import ozoneBlueGradient from "../assets/images/gradient/ozone_blue_gradient.png";
import tagBlueGradient from "../assets/images/gradient/tag_blue_gradient.png";

import * as styles from "../wrappers/animated-gradient-wrapper/animated-gradient-wrapper.module.scss";

const cx = classNames.bind(styles);

export type AnimatedGradientsType = {
  [gradientName: string]: {
    width: number;
    gradientImg: string;
    motionPath: Array<{
      x: number;
      y: number;
      rotation: number;
      scale?: number;
    }>;
  };
};

export const gradientGenerator = (gradients: AnimatedGradientsType) => {
  const style = (id: GradientColorsName) => {
    const width = gradients[id].width;
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
      id: GradientColorsName.TAG_BLUE,
      className: cx("tag_blue", "gradient"),
      imgSrc: tagBlueGradient,
      style: style(GradientColorsName.TAG_BLUE),
    },
  ];
};

const desktopMaxData = {
  phito_green: {
    width: 1400,
    gradientImg: phitoGreenGradient,
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
    gradientImg: ionicMintGradient,
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
    gradientImg: ozoneBlueGradient,
    motionPath: [
      { x: -100, y: 400, rotation: 0, scale: 1 },
      { x: 620, y: 200, rotation: 30, scale: 1.19 },
      { x: 600, y: 320, rotation: 0, scale: 1.19 },
      { x: 280, y: 180, rotation: 20, scale: 0.86 },
      { x: -85, y: 400, rotation: 0, scale: 1 },
      { x: -100, y: 400, rotation: 0, scale: 1 },
    ],
  },
  tag_blue: {
    width: 1450,
    gradientImg: tagBlueGradient,
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

const gradientDataCreator = (coefficient: number) => {
  const gradientData = {} as typeof desktopMaxData;
  for (const [key, value] of Object.entries(desktopMaxData)) {
    const mappedMotionPath = value.motionPath.map((animationStage) => ({
      ...animationStage,
      x: animationStage.x * coefficient,
      y: animationStage.y * coefficient,
    }));
    Object.assign(gradientData, {
      [key]: {
        ...value,
        motionPath: mappedMotionPath,
        width: value.width * coefficient,
      },
    });
  }
  return gradientData;
};

export const topPageAnimatedGradientData = {
  [BreakpointNames.DESKTOP_MAX as string]: {
    style: { left: "-80px" },
    gradients: desktopMaxData,
  },
  [BreakpointNames.DESKTOP_LARGE as string]: {
    style: { left: "-80px" },
    gradients: gradientDataCreator(0.75),
  },
  [BreakpointNames.DESKTOP as string]: {
    style: { left: "-120px" },
    gradients: gradientDataCreator(0.7),
  },
  [BreakpointNames.TABLET as string]: {
    style: { left: "-120px" },
    gradients: gradientDataCreator(0.71),
  },
  [BreakpointNames.MOBILE as string]: {
    style: { left: "-120px" },
    gradients: gradientDataCreator(0.65),
  },
};

export const bottomPageAnimatedGradientData = {
  [BreakpointNames.DESKTOP_MAX as string]: {
    style: { transform: "scale(1, -1) rotate(18deg)", left: "210px" },
    gradients: desktopMaxData,
  },
  [BreakpointNames.DESKTOP_LARGE as string]: {
    style: { transform: "scale(1, -1) rotate(18deg)", left: "-100px" },
    gradients: gradientDataCreator(0.8),
  },
  [BreakpointNames.DESKTOP as string]: {
    style: { transform: "scale(1, -1)" },
    gradients: gradientDataCreator(0.75),
  },

  [BreakpointNames.TABLET as string]: {
    style: { transform: "scale(1, -1)" },
    gradients: gradientDataCreator(0.71),
  },
  [BreakpointNames.MOBILE as string]: {
    style: { transform: "scale(1, -1)" },
    gradients: gradientDataCreator(0.65),
  },
};

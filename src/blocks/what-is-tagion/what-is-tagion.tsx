import React from "react";
import classNames from "classnames/bind";

import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import { whatIsTagionBlockCardsData } from "../../content/what-is-tagion";

import * as styles from "./what-is-tagion.module.scss";

import transparentAtomsBondImg from "../../assets/images/transparent_atoms_bond.png";

const cx = classNames.bind(styles);

export const WhatIsTagionBlock: React.FC = () => {
  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => {
      breakpointDeterminator();
    },
  });

  return (
    <div
      className={`${cx(
        "what_is_tagion_block"
      )} disable_lateral_margins main-top-margins`}
    >
      <div className={`${cx("title")} title-font`}>What is Tagion?</div>
      <div className={`${cx("description")} body-font`}>
      In essence, Tagion is a network of distributed databases that combines features from blockchains and traditional centralised architectures. It is the alternative to conventional data management services that are predominantly owned and controlled by corporations that prioritise shareholder value over user-benefits. 

Tagion is built to be decentralised, meaning that no one actor can gain power over others and that user benefits remain safeguarded. Tagion was designed and implemented based on the following values:
        <div className="text-separator" />
        <div className={cx("cards_wrapper")}>
          {whatIsTagionBlockCardsData.length &&
            whatIsTagionBlockCardsData.map((cardData) => (
              <div className={cx("card")} key={cardData.id}>
                <span className={`${cx("id")} inter_400`}>{cardData.id}</span>
                <span
                  className={`${cx("text")} prompt-400`}
                  style={{
                    width: pageSize && cardData.styles?.[pageSize]?.width,
                  }}
                >
                  {cardData.text}
                </span>
              </div>
            ))}
        </div>
        <div className="text-separator" />
        Different from blockchains, Tagion's patented database architecture is designed for full data control and massive scale. With its slick and powerful dataformat it ensures security and efficiency. Its Hashgraph consensus mechanism is enhanced with a patented communication protocol that is capable of handling high volumes of transactions at great speed without compromise and at low cost and minimal energy consumption. 
        <div className="text-separator" />
        Tagion provides the toolbox for developers, communities and enterprises to build locally optimised, globally shared real-world use cases.
      </div>
      <img
        className={cx("mobile_atoms_bond_img")}
        src={transparentAtomsBondImg}
        alt="Atoms bond"
      />
    </div>
  );
};

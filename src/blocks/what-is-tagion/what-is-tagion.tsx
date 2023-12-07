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
        At its core, Tagion is designed for a massive scale. It's a
        Hashgraph-based system capable of handling a high volume of transactions
        at great speed with high security and low cost.
        <div className="text-separator" />
        Tagion is a powerful asynchronous Byzantine Fault Tolerant (aBFT)
        foundational layer for:
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
        Tagion is a toolbox for developers, communities and entreprises to build
        locally optimised, globally shared real-world use cases.
      </div>
      <img
        className={cx("mobile_atoms_bond_img")}
        src={transparentAtomsBondImg}
        alt="Atoms bond"
      />
    </div>
  );
};

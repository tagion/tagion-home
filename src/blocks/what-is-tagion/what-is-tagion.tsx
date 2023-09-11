import React from "react";
import classNames from "classnames/bind";

import * as styles from "./what-is-tagion.module.scss";

import transparentAtomsBondImg from "../../assets/images/transparent_atoms_bond.png";

const cx = classNames.bind(styles);

export const WhatIsTagionBlock: React.FC = () => {
  return (
    <div
      className={`${cx(
        "what_is_tagion_block"
      )} disable-lateral-margins main-top-margins`}
    >
      <div className={`${cx("title")} subtitle-font-28-36-50-80`}>
        What is Tagion?
      </div>
      <div className={`${cx("description")} body-font`}>
        Tagion redefines the DLT paradigm with a unique Node Swapping mechanism
        enabling decentralisation and a Hashgraph-based consensus for a high
        volume of transaction capabilities. Tagion is a versatile network
        infrastructure for custom applications and ecosystems, delivering the
        trifecta of security, scalability and decentralisation.
        <div className="text-separator" />
        Tagion isn't just another network; it's a powerful asynchronous
        Byzantine Fault Tolerant (aBFT) protocol-based system with a toolbox for
        developers, communities and enterprises to build locally optimised,
        globally shared real-world use cases.
      </div>
      <img
        className={cx("mobile_atoms_bond_img")}
        src={transparentAtomsBondImg}
        alt="Atoms bond"
      />
    </div>
  );
};

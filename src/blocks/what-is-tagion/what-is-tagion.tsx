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
        Tagion accelerates the DLT landscape forward using a modular framework
        rooted in an asynchronous Byzantine Fault Tolerant (aBFT) hashgraph
        protocol.
        <div className="text-separator" />
        By uniquely swapping between active and passive nodes, Tagion ensures
        decentralisation while boosting performance. The deterministic nature of
        Tagion's Hashgraph supports separate storage in its distributed database
        without compromising the byzantine proof of the data - providing a
        highly scalable system that can handle significant data volumes.
        <div className="text-separator" />
        Thanks to its Commons Good governance model and unique infrastructure
        that addresses the crux of DLT, Tagion stands apart. It's not just
        another network; it's a powerful accelerator for sustainability.
        <div className="text-separator" />
        Developers, communities, and enterprises can innovate locally,
        streamline globally, and showcase practical use of products and
        services.
      </div>
      <img
        className={cx("mobile_atoms_bond_img")}
        src={transparentAtomsBondImg}
        alt="Atoms bond"
      />
    </div>
  );
};

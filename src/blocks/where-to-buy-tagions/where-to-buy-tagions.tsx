import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Button, CustomLink } from "../../components";
import { ExternalLinks, PageSizes } from "../../common/enums";
import { usePageBreakpointDeterminator, useResizeEvent } from "../../hooks";
import * as styles from "./where-to-buy-tagions.module.scss";
import transparentAtomsBondImg from "../../assets/images/transparent_atoms_bond.png";

const cx = classNames.bind(styles);

export const WhereToBuyTagionsBlock: React.FC = () => {
  useEffect(() => {});

  const { breakpointDeterminator, pageSize } = usePageBreakpointDeterminator();
  useResizeEvent({
    resizeHandler: () => {
      breakpointDeterminator();
    },
  });

  return (
    <div
      className={`${cx(
        "where_to_buy_tagions_block"
      )} disable_lateral_margins main-top-margins`}
    >
      <div className={`${cx("title")} title-font`}>Where to buy tagions?</div>
      <div className={`${cx("description")} body-font`}>
        If you're interested in owning your own tagions, <br />please contact us.
        <div className="text-separator" />
        <div className={cx("button_wrapper")}>
          <div className={cx("card_wrapper", { withGradient: true })}>
            <Button
              name="Buy Tagions"
              isWhite
              isGradientAdded
              className={cx("button")}
              onClick={() => (window.location.href = "/get-tagions")}
            />
          </div>
          <div className="text-separator" />
        </div>
      </div>
      <img
        className={cx("mobile_atoms_bond_img")}
        src={transparentAtomsBondImg}
        alt="Atoms bond"
      />
    </div>
  );
};

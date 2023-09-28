import React, { useState } from "react";
import classNames from "classnames/bind";

import { AlphabetFilter } from "../../components";

import * as styles from "./glossary.module.scss";
import { glossaryOfTermsData } from "../../content/glossary-of-terms";

const cx = classNames.bind(styles);

export const GlossaryBlock: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const termsBySelectedLetter = glossaryOfTermsData[selectedLetter];

  return (
    <div className={cx("glossary_block")}>
      <AlphabetFilter
        selectedLetter={selectedLetter}
        setSelectedLetter={setSelectedLetter}
      />
      <span className={`${cx("selected_letter")} subtitle_font_36-3_50`}>
        {selectedLetter}
      </span>
      <div className={cx("list_of_terms")}>
        {termsBySelectedLetter?.length &&
          termsBySelectedLetter.map(({ term, meaning }) => (
            <div key={term} className={`${cx("term_wrapper")}`}>
              <span className={`${cx("term")} prompt-28 prompt-400`}>
                {term}
              </span>
              <span className={`${cx("meaning")} body-font`}>{meaning}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

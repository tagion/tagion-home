import React from "react";
import classNames from "classnames/bind";

import { glossaryOfTermsData } from "../../content/glossary-of-terms";

import glossaryLetterGradientImg from "../../assets/images/gradient/buttons/glossary_letter.png";

import * as styles from "./alphabet-filter.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  selectedLetter: string;
  setSelectedLetter: React.Dispatch<React.SetStateAction<string>>;
}

const alphabetASCIICodes = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alphabetASCIICodes.map((ASCIICode) =>
  String.fromCharCode(ASCIICode)
);

export const AlphabetFilter: React.FC<InputProps> = ({
  selectedLetter,
  setSelectedLetter,
}) => {
  return (
    <div className={cx("alphabet_filter")}>
      {alphabet.length &&
        alphabet.map((letter, i) => (
          <div
            className={`${cx("letter", {
              isSelected: selectedLetter === letter,
              isInactive: !glossaryOfTermsData[letter],
            })} prompt-400`}
            onClick={() => setSelectedLetter(() => letter)}
            key={i}
          >
            <span>{letter}</span>
            {selectedLetter === letter && (
              <img
                src={glossaryLetterGradientImg}
                className={cx("gradient_letter")}
              />
            )}
          </div>
        ))}
    </div>
  );
};

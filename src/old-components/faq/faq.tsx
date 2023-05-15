import React, { useState } from "react";
import classNames from "classnames/bind";

import { ReactComponent as MinusIcon } from "../../assets/images/minus_icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/images/plus_icon.svg";

import * as styles from "./faq.module.scss";

const cx = classNames.bind(styles);

export const FAQ: React.FC = () => {
  const [openedQuestionIds, setOpenedQuestionIds] = useState<Array<number>>([]);
  return (
    <div className={cx("FAQ")}>
      <span className={cx("block_name")}>FAQ</span>
      <div className={cx("sections_wrapper")}>
        {faqs &&
          faqs.map((section, i) => (
            <div key={i} className={cx("FAQ_section")}>
              <span className={cx("title")}>{section.title}</span>
              <div className={cx("QandA_wrapper")}>
                {section.FAQ.map((faq, i) => {
                  const isOpened = openedQuestionIds.find(
                    (id) => id === faq.id
                  );
                  return (
                    <div
                      className={cx("QandA", {
                        isOpened,
                      })}
                      key={i}
                    >
                      <div
                        className={`${cx("question")} user_select_none`}
                        onClick={() =>
                          setOpenedQuestionIds((ids) => {
                            return isOpened
                              ? ids.filter((id) => id !== faq.id)
                              : [...ids, faq.id];
                          })
                        }
                      >
                        <span>{faq.question}</span>
                        <span className={cx("icon_wrapper")}>
                          {isOpened ? (
                            <MinusIcon className={cx("icon")} />
                          ) : (
                            <PlusIcon className={cx("icon")} />
                          )}
                        </span>
                      </div>
                      {isOpened && (
                        <span className={cx("answer")}>{faq.answer}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const faqs = [
  {
    title: "General",
    FAQ: [
      {
        id: 1,
        question: "What is Tagion Program on Github?",
        answer:
          "The group of projects works on the Tagion Protocols Network (TPN) to achieve true decentralisation. It includes the development of: Tagion Protocols, Tagion Origin Client, Developer Tools, Community, Knowledge Base",
      },
      {
        id: 2,
        question: "What is adaptive money supply?",
        answer:
          "true decentralisation. It includes the development of: Tagion Protocols, Tagion Origin Client, Developer Tools, Community, Knowledge Base",
      },
    ],
  },
  {
    title: "Process",
    FAQ: [
      {
        id: 3,
        question: "Who governs Tagion? ",
        answer:
          "It includes the development of: Tagion Protocols, Tagion Origin Client, Developer Tools, Community, Knowledge Base",
      },
      {
        id: 4,
        question: "Is Tagion regulatory compliant? ",
        answer:
          "otocols Network (TPN) to achieve true decentralisation. It includes the development of: Tagion Protocols, Tagion Origin Client, Developer Tools, Community, Knowledge Base",
      },
    ],
  },
];

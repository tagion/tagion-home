import React, { useState } from "react";
import classNames from "classnames/bind";

import { Button, Input } from "../../components";

import * as styles from "./subscribe-to-our-newsletter.module.scss";

import { ReactComponent as RingsIcon } from "../../assets/images/rings_icon.svg";

const cx = classNames.bind(styles);

export const SubscribeToOurNewsletterBlock: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={cx("subscribe_to_our_newsletter_block")}>
      <div className={cx("content_wrapper")}>
        <div className={cx("icon_wrapper")}>
          <RingsIcon />
        </div>
        <div className={cx("body")}>
          <div className={`${cx("title")} title-font`}>
            Subscribe to our newsletter
          </div>
          <form className={cx("form")}>
            <Input
              label="Email address"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              value={inputValue}
              className={cx("email_input")}
            />
            <Button name="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
};

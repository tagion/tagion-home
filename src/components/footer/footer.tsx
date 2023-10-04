import React from "react";
import classNames from "classnames/bind";

import {
  LinkType,
  FooterColumnLinkType,
  footerColumnLinks,
} from "../../content";
import { SocialLinks } from "../socials-links";
import { CustomLink } from "../custom-link";
import { navigate } from "gatsby";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";

import * as styles from "./footer.module.scss";

const cx = classNames.bind(styles);

export const Footer: React.FC = () => {
  const columnOfLinksItem = (linkColumn: FooterColumnLinkType) => (
    <div className={cx("column")} key={linkColumn.title}>
      <div className={`${cx("column_title")} prompt-20`}>
        {linkColumn.title}
      </div>
      <div className={cx("column_links")}>
        {linkColumn.links &&
          linkColumn.links.map(
            ({ linkTo, name, icon, externalLink }: LinkType) => (
              <CustomLink
                linkTo={linkTo}
                isExternalLink={externalLink}
                key={name}
                className="inter_16"
              >
                {/* {!!icon && <img src={icon} alt={`${name} icon`} />} */}
                {name}
              </CustomLink>
            )
          )}
      </div>
    </div>
  );

  return (
    <footer id="footer">
      <div className={cx("footer_content")}>
        <div className={cx("logo_column")}>
          <LogoIcon className={cx("logo")} onClick={() => navigate("/")} />
          <SocialLinks className={cx("socials")} isWhiteColor />
        </div>

        <div className={cx("link_columns")}>
          {footerColumnLinks &&
            footerColumnLinks.map((linkColumn) =>
              columnOfLinksItem(linkColumn)
            )}
          <div className={`${cx("additional_links_column")} inter-12`}>
            <SocialLinks className={cx("socials")} isWhiteColor />
            <CustomLink linkTo="/privacy-policy">Privacy Policy</CustomLink>
            <CustomLink linkTo="/terms-of-use">Terms of use</CustomLink>
          </div>
        </div>

        <span className={`${cx("copyright")} inter-12`}>© 2023 Tagion</span>
      </div>
    </footer>
  );
};

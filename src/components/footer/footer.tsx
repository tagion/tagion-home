import React from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";

import {
  LinkType,
  FooterColumnLinkType,
  techPaperLink,
  privacyPolicyLink,
  termsOfUseLink,
} from "../../content";
import { SocialLinks } from "../socials-links";

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";

import * as styles from "./footer.module.scss";

const cx = classNames.bind(styles);

export const Footer: React.FC = () => {
  // const columnOfLinksItem = (linkColumn: FooterColumnLinkType) => (
  //   <div className={cx("column")} key={linkColumn.title}>
  //     <div className={cx("column_title")}>{linkColumn.title}</div>
  //     <div className={cx("column_links")}>
  //       {linkColumn.links &&
  //         linkColumn.links.map(({ linkTo, name, icon }: LinkType) => (
  //           <Link to={linkTo} key={name}>
  //             {!!icon && <img src={icon} alt={`${name} icon`} />}
  //             {name}
  //           </Link>
  //         ))}
  //     </div>
  //   </div>
  // );

  return (
    <footer>
      <div className={cx("main_links")}>
        <div className={cx("logo_and_socials")}>
          <Link to="/" className={cx("logo")}>
            <LogoIcon />
          </Link>
          <SocialLinks className={cx("socials")} />
        </div>
        <div className={`${cx("links")} font-16`}>
          <a href={techPaperLink.linkTo} target="_blank">{techPaperLink.name}</a>
          <Link to={termsOfUseLink.linkTo}>{termsOfUseLink.name}</Link>
          <Link to={privacyPolicyLink.linkTo}>{privacyPolicyLink.name}</Link>
        </div>
      </div>

      <div className={cx("copyright_and_socials")}>
        <SocialLinks className={cx("socials")} />
        <span className={`${cx("copyright")} font-12`}>© 2023 Tagion</span>
      </div>

      {/* ////// old version ///// */}
      {/* <div className={cx("footer_content")}>
        <div className={cx("logo_column")}>
          <LogoIcon className={cx("logo")} />
          <SocialLinks className={cx("socials")} />
        </div>

        <div className={cx("link_columns")}>
          {footerColumnLinks &&
            footerColumnLinks.map((linkColumn) =>
              columnOfLinksItem(linkColumn)
            )}
          <div className={cx("additional_links_column")}>
            <SocialLinks className={cx("socials")} />
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of use</Link>
          </div>
        </div>

        <span className={cx("copyright")}>© 2023 Tagion</span>
      </div> */}
    </footer>
  );
};

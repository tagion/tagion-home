import React from "react";
import { Link } from "gatsby";
import classNames from "classnames/bind";

import {
  footerColumnLinks,
  LinkType,
  FooterColumnLinkType,
} from "../../content";

import logoIcon from "../../assets/images/logo.svg";

import * as styles from "./footer.module.scss";

const cx = classNames.bind(styles);

export const Footer: React.FC = () => {
  const columnOfLinksItem = (linkColumn: FooterColumnLinkType) => (
    <div className={cx("column")} key={linkColumn.title}>
      <div className={cx("column_title")}>{linkColumn.title}</div>
      <div className={cx("column_links")}>
        {linkColumn.links &&
          linkColumn.links.map(({ linkTo, name, icon }: LinkType) => (
            <Link to={linkTo} key={name}>
              {!!icon && <img src={icon} alt={`${name} icon`} />}
              {name}
            </Link>
          ))}
      </div>
    </div>
  );

  return (
    <footer>
      <div className={cx("footer_content")}>
        <div className={cx("top_footer")}>
          <Link to="/" className={cx("logo_wrapper")}>
            <img src={logoIcon} alt="Tagion logo icon" />
          </Link>
          <div className={cx("link_columns")}>
            {footerColumnLinks &&
              footerColumnLinks.map((linkColumn) =>
                columnOfLinksItem(linkColumn)
              )}
          </div>
        </div>
        <div className={cx("bottom_footer")}>
          <span>© 2023 Tagion</span>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

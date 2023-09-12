import React from "react";
import { Link } from "gatsby";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

interface InputProps {
  linkTo?: string;
  className?: string;
  isExternalLink?: boolean;
  onClick?: () => void;
}

export const CustomLink: React.FC<PropsWithChildren<InputProps>> = ({
  linkTo = "",
  className = "",
  children,
  isExternalLink = false,
  onClick,
}) => {
  return isExternalLink ? (
    <a
      href={linkTo}
      target="_blank"
      className={`${!linkTo ? "disable-link" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link to={linkTo} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

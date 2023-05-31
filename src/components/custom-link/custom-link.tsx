import React from "react";
import { Link } from "gatsby";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

interface InputProps {
  linkTo: string;
  className?: string;
  isExternalLink?: boolean;
}

export const CustomLink: React.FC<PropsWithChildren<InputProps>> = ({
  linkTo,
  className = "",
  children,
  isExternalLink = false,
}) => {
  return isExternalLink ? (
    <a href={linkTo} target="_blank" className={className}>
      {children}
    </a>
  ) : (
    <Link to={linkTo} className={className}>
      {children}
    </Link>
  );
};

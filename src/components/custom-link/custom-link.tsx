import React from "react";
import { Link } from "gatsby";

import { PropsWithChildren } from "../../common/types/props-with-children.type";

interface InputProps {
  linkTo?: string;
  className?: string;
  isExternalLink?: boolean;
  state?: { [key: string]: string | number };
  onClick?: () => void;
  isLinkDisabled?: boolean;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

export const CustomLink: React.FC<PropsWithChildren<InputProps>> = ({
  linkTo = "",
  className = "",
  children,
  isExternalLink = false,
  state,
  isLinkDisabled = !linkTo,
  onClick,
  ...props
}) => {
  return isExternalLink ? (
    <a
      href={linkTo}
      target="_blank"
      className={`${isLinkDisabled ? "disable-link" : ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      to={linkTo}
      className={`${isLinkDisabled ? "disable-link" : ""} ${className}`}
      onClick={onClick}
      state={state}
      {...props}
    >
      {children}
    </Link>
  );
};

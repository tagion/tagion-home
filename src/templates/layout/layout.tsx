import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="layout">
      <div>header</div>
      <main>{children}</main>
      <div>footer</div>
    </div>
  );
};

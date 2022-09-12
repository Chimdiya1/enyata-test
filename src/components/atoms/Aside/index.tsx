import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};
export const Aside = ({ className, children }: Props) => (
  <aside className={className}>{children}</aside>
);

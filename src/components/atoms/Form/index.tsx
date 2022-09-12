import React, { ReactNode } from "react";
type Props = {
  className?: string;
  children: ReactNode;
  onSubmit: (e:any) => any;
};
export const Form = ({ children, onSubmit }: Props) => (
  <form onSubmit={onSubmit}>{children}</form>
);

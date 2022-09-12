import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode,
};
const StyledTableHead = styled.th`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #a4a7b7;
  padding: 25px 32px;
  text-align: left;
`;
export const TableHead = ({ children }: Props) => (
  <StyledTableHead>{children}</StyledTableHead>
);

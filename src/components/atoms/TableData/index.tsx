import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode
};
const StyledTableData = styled.td`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #434854;
  padding: 25px 32px;
  border-top: 1px solid rgba(164, 167, 183, 0.4);
`;
export const TableData = ({ children }: Props) => (
  <StyledTableData>{children}</StyledTableData>
);

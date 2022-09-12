import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode,
  onClick?: () => void,
};
const StyledTableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(13, 47, 161, 0.07);
    border-radius: 4px;
  }
`;
export const TableRow = ({ onClick, children }: Props) => (
  <StyledTableRow onClick={onClick}>{children}</StyledTableRow>
);

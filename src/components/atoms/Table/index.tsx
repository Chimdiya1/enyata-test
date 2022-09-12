import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode
};
const StyledTable = styled.table`
  border: 1px solid rgba(164, 167, 183, 0.4);
  border-radius: 4px;
  width: 100%;

  border-collapse: separate;
  border-spacing: 0;

  /* top-left border-radius */
  tr:first-child th:first-child {
    border-top-left-radius: 6px;
  }

  /* top-right border-radius */
  tr:first-child th:last-child {
    border-top-right-radius: 6px;
  }

  /* bottom-left border-radius */
  tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  /* bottom-right border-radius */
  tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }
  font-family: "Inter", sans-serif;
`;
export const Table = ({ children }: Props) => (
  <StyledTable>{children}</StyledTable>
);

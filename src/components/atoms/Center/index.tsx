import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode;
};
const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const Center = ({ children }: Props) => (
  <StyledDiv>{children}</StyledDiv>
);

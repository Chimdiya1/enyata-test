import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode;
};
const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Card = ({ children }: Props) => {
  return <StyledCard>{children}</StyledCard>;
};

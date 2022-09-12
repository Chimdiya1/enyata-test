import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined
};
const StyledButton = styled.button`
  box-sizing: border-box;
  width: 335px;
  background: #0a74dc;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  border: none;
  padding: 12px;
  cursor: pointer;
`;

export const Button = ({ children, onClick, type }:Props) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

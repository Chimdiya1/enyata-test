import React from "react";
import styled from "styled-components";
import { Image } from "../../atoms/Image";
import { Link } from "react-router-dom";
import { Text } from "../../atoms/Text";

type Props = {
  text: string;
  isActive: boolean;
  imgSrc: string;
  to: string;
};
type LinkProps = {
  $isactivelink: boolean;
};

const StyledButton = styled(Link)<LinkProps>`
  box-sizing: border-box;
  width: 232px;
  background: ${(props) => (props.$isactivelink ? "#0a74dc" : "none")};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #2895ff;
  }
  margin-bottom: 0.5rem;
`;
const StyledText = styled(Text)`
  margin-left: 20px;
  font-weight: 600;
  color: #ffffff;
`;

function DashboardButton({ text, isActive, imgSrc, to }: Props) {
  return (
    <StyledButton to={to} $isactivelink={isActive}>
      <Image src={imgSrc} width="17px" alt="icon" />
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
}

export default DashboardButton;

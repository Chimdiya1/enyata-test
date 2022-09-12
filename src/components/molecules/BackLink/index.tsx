import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Image } from "../../atoms/Image";
import { Text } from "../../atoms/Text";
import chevronLeft from "../../../resources/images/chevron_left.png";
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledText = styled(Text)`
  margin-left: 0.5rem;
  color: #a4a7b7;
  text-decoration: none;
`;
export const BackLink = () => {
  const navigate = useNavigate();
  return (
    <StyledLink onClick={() => navigate(-1)}>
      <Image src={chevronLeft} alt="left" width="9px" />
      <StyledText>Back</StyledText>
    </StyledLink>
  );
};

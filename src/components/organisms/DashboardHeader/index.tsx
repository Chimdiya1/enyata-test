import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Image } from "../../atoms/Image";
import menu from "../../../resources/images/menu.png";
import bell from "../../../resources/images/bell.png";
import account from "../../../resources/images/account.png";
import { BackLink } from "../../molecules/BackLink";
import { Text } from "../../atoms/Text";
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
  padding: 12px 40px;
`;
const StyledImage = styled(Image)`
  padding-right: 32px;
  border-right: 1px solid #e5e5e5;
  margin-right: 32px;
`;
const StyledText = styled(Text)`
  margin-left: 24px;
  margin-right: 60px;
`;

const StyledDiv = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export function DashboardHeader() {
  let { category } = useParams();
  return (
    <StyledNav>
      {category && <BackLink />}
      <StyledDiv>
        <StyledImage src={bell} width="16px" alt="bell" />
        <Image src={account} width="30px" alt="avatar" />
        <StyledText>John Doe</StyledText>
        <Image src={menu} width="16px" alt="menu" />
      </StyledDiv>
    </StyledNav>
  );
}

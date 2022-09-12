import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Aside } from "../../atoms/Aside";
import { Image } from "../../atoms/Image";
import logo from "../../../resources/images/logo.png";
import overview from "../../../resources/images/overview.png";
import blue from "../../../resources/images/blue-icon.png";
import pink from "../../../resources/images/pink-icon.png";
import yellow from "../../../resources/images/yellow-icon.png";
import DashboardButton from "../../molecules/DashboardButton";

const StyledAside = styled(Aside)`
  background-color: #031434;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
`;



const BtnGroup = styled.div`
  margin-top: 3rem;
`;
const StyledImage = styled(Image)`
  margin-bottom: 30px;
`;

export function DashboardSidebar() {
  let { category } = useParams();
  return (
    <StyledAside>
      <StyledImage src={logo} width="107px" alt="logo" />
      <DashboardButton imgSrc={overview} to="/dashboard" isActive={!category} text="Overview" />
      <BtnGroup>
        <DashboardButton imgSrc={blue} to="/dashboard/starships" isActive={category === "starships"} text="Starships" />
        <DashboardButton imgSrc={pink} to="/dashboard/people" isActive={category === "people"} text="People" />
        <DashboardButton imgSrc={yellow} to="/dashboard/species" isActive={category === "species"} text="Species" />
      </BtnGroup>
    </StyledAside>
  );
}

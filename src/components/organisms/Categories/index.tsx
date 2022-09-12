import React from "react";

import styled from "styled-components";
import { CategoryCard } from "../../molecules/CategoryCard";
import green from "../../../resources/images/green-icon.png";
import blue from "../../../resources/images/blue-icon.png";
import pink from "../../../resources/images/pink-icon.png";
import yellow from "../../../resources/images/yellow-icon.png";

const StyledDiv = styled.div`
  display: flex;
  // align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 75px;
`;

export function Categories() {
  return (
    <StyledDiv>
      <CategoryCard imgSrc={green} title="Film" amount="200" statisctic="20" />
      <CategoryCard
        imgSrc={blue}
        title="Starship"
        amount="200"
        statisctic="20"
      />
      <CategoryCard imgSrc={pink} title="People" amount="200" statisctic="20" />
      <CategoryCard
        imgSrc={yellow}
        title="Species"
        amount="200"
        statisctic="20"
      />
    </StyledDiv>
  );
}

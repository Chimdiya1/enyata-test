import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { DashboardHeader } from "../../components/organisms/DashboardHeader";
import { DashboardSidebar } from "../../components/organisms/DashboardSidebar";
import { Image } from "../../components/atoms/Image";
import people from "../../resources/images/people.png";
import films from "../../resources/images/films.png";
import species from "../../resources/images/species.png";
import starships from "../../resources/images/starships.png";
import { ItemDetails } from "../../components/organisms/ItemDetails";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
`;
const StyledMain = styled.main`
  padding: 2rem;
  display: flex;
`;

const StyledImage = styled(Image)`
  margin-right: 30px;
`;

function ItemPage() {
  let { category } = useParams();
  let { id } = useParams();

  //api doesn't have images
  let images = {
    people: people,
    films: films,
    species: species,
    starships: starships,
  };

  return (
    <Container>
      <DashboardSidebar />
      <BodyContainer>
        <DashboardHeader />
        {category && id && (
          <StyledMain>
            <StyledImage
              src={images[category as keyof typeof images]}
              width="318px"
              alt="logo"
            />
            <ItemDetails category={category} id={id} />
          </StyledMain>
        )}
      </BodyContainer>
    </Container>
  );
}

export default ItemPage;

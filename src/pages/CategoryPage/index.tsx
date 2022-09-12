import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { CategoryTable } from "../../components/organisms/CategoryTable";
import { DashboardHeader } from "../../components/organisms/DashboardHeader";
import { DashboardSidebar } from "../../components/organisms/DashboardSidebar";

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
`;

function CategoryPage() {
  let { category } = useParams();

  let categoryHeadings = {
    films: [
      "title",
      "release_date",
      "director",
      "producer",
      "episode_id",
      "url",
    ],
    starships: [
      "name",
      "model",
      "starship_class",
      "passengers",
      "length",
      "url",
    ],
    people: ["name", "birth_year", "gender", "hair_color", "height", "created"],
    species: [
      "name",
      "classification",
      "eye_colors",
      "hair_colors",
      "average_height",
      "created",
    ],
  };

  return (
    <Container>
      <DashboardSidebar />
      <BodyContainer>
        <DashboardHeader />
        <StyledMain>
          {category && (
            <CategoryTable
              category={category}
              headings={
                categoryHeadings[category as keyof typeof categoryHeadings]
              }
            />
          )}
        </StyledMain>
      </BodyContainer>
    </Container>
  );
}

export default CategoryPage;

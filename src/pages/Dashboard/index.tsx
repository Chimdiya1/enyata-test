import React from "react";
import styled from "styled-components";
import { Categories } from "../../components/organisms/Categories";
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

function Dashboard() {
  return (
    <Container>
      <DashboardSidebar />
      <BodyContainer>
        <DashboardHeader />
        <StyledMain>
          <Categories />
          <CategoryTable
            category="films"
            headings={[
              "title",
              "release_date",
              "director",
              "producer",
              "episode_id",
            ]}
          ></CategoryTable>
        </StyledMain>
      </BodyContainer>
    </Container>
  );
}

export default Dashboard;

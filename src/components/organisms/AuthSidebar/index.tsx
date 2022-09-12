import React from "react";

import styled from "styled-components";
import { Aside } from "../../atoms/Aside";
import { Image } from "../../atoms/Image";
import logo from "../../../resources/images/logo.png";

const StyledAside = styled(Aside)`
  background-color: #031434;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 48px;
`;

export function AuthSidebar() {
  return (
    <StyledAside>
      <Image src={logo} width="385px" alt="logo" />
    </StyledAside>
  );
}

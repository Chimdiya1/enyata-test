import React, { ReactNode } from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label";
import { Text } from "../../atoms/Text";

type Props = {
  children: ReactNode;
  inputName:string,
  error?:string
};
const StyledFormInput = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;
const StyledLabel = styled(Label)`
  position: absolute;
  top: -10px;
  background: white;
  height: 16px;
  font-size: 12px;
  padding: 0 4px;
  left: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #b0b9c8;
`;
const StyledError = styled(Text)`
  color:red;
  font-size:10px;
  margin-top:10px;
  width: 300px;
  line-height:14px;
`;
export const FormInput = ({ children, inputName, error }:Props) => (
  <StyledFormInput>
    <StyledLabel inputName={inputName} />
    {children}
    {error && <StyledError>{error}</StyledError>}
  </StyledFormInput>
);

import React, { ReactNode } from "react";
import styled from "styled-components";
type Props = {
  className?: string,
  children: ReactNode,
  size?:string,
  color?:string,
  weight?:string,
  lineHeight?:string
};
const StyledText = styled.p<Props>`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.size ? props.size : "16px")};
  color: ${(props) => (props.color ? props.color : "#434854")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "24px")};
  margin: 0px;
`;
export const Text = ({ className, size,color,weight,lineHeight, children }:Props) => (
  <StyledText className={className} size={size} color={color} weight={weight} lineHeight={lineHeight}>
    {children}
  </StyledText>
);

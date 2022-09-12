import styled from "styled-components";
type Props = {
  href:string,
  text:string,
  type?:string
};
const StyledLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: ${(props) => (props.type === "blue" ? "14px" : "12px")};
  color: ${(props) => (props.type === "blue" ? "#0A74DC" : "#303B54")};
  line-height: ${(props) => (props.type === "blue" ? "16px" : "20px")};
  text-align: center;
  text-decoration-line: ${(props) =>
    props.type === "blue" ? "none" : "underline"};
  margin: 1rem 0;
`;
export const Link = ({ href, text, type }:Props) => (
  <StyledLink href={href} type={type}>
    {text}
  </StyledLink>
);

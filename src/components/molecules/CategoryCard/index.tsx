import React from "react";
import styled from "styled-components";
import { Card } from "../../atoms/Card";
import { Image } from "../../atoms/Image";
import { Text } from "../../atoms/Text";

const Title = styled(Text)`
  font-weight: 700;
  width: 180px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

type Props = {
  imgSrc:string,
  title:string,
  amount:string,
  statisctic:string
};
export const CategoryCard = ({ imgSrc, title, amount, statisctic }:Props) => (
  <Card>
    <Top>
      <Title>{title}</Title>
      <Image alt="icon" width="26px" src={imgSrc} />
    </Top>
    <Title>{amount}</Title>
    <Text size="9px" color="#00992b">
      {statisctic} more than yesterday
    </Text>
  </Card>
);

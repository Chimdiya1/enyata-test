import React, { ReactNode } from "react";

import styled from "styled-components";
import { Form } from "../../atoms/Form";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
  children: ReactNode;
  title: string;
  subTitle: string;
};
const Container = styled.div`
  background: #ffffff;
  border: 1px solid rgba(164, 167, 183, 0.3);
  border-radius: 8px;
  padding: 2.25rem 4.125rem;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #434854;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 62px;
`;

export function AuthForm({ handleSubmit, children, title, subTitle }: Props) {
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        {children}
      </Container>
    </Form>
  );
}

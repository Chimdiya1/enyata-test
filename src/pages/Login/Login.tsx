import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Center } from "../../components/atoms/Center";
import { Input } from "../../components/atoms/Input";
import { AuthSidebar } from "../../components/organisms/AuthSidebar";
import { AuthForm } from "../../components/organisms/AuthForm";
import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/atoms/Button";
import { Link } from "../../components/atoms/Link";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  justify-content: center;
`;

const InfoSpan = styled.span`
  color: #c4c4c4;
  margin: 0 4px;
`;

const StyledMain = styled.main`
  width: 100%;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const submitAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error) {
      navigate("/dashboard", { replace: true });
    }
  };
  const handleValidation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError("");
    e.preventDefault();
    const passwordInputValue = (e.target as HTMLInputElement).value.trim();
    //for password
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-zA-Z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const passwordLength = passwordInputValue.length;
    const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
    const digitsPassword = digitsRegExp.test(passwordInputValue);
    if (
      passwordLength < 8 ||
      !uppercasePassword ||
      !lowercasePassword ||
      !digitsPassword
    ) {
      setError(
        "Password must contain at least one Uppercase letter,Lowercase letter and number "
      );
    }
  };

  return (
    <Container>
      <AuthSidebar />
      <StyledMain>
        <Center>
          <AuthForm
            handleSubmit={submitAction}
            title="Login"
            subTitle="Kindly enter your details to log in "
          >
            <FormInput inputName="Email Address">
              <Input
                placeholder="chimdia@gmail.com"
                required
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormInput>
            <FormInput error={error} inputName="Password">
              <Input
                placeholder="********"
                required
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                validation={handleValidation}
              />
            </FormInput>
            <Button type="submit">Log In</Button>
            <Link type="blue" href="/" text="Forgot your password?" />
            <InfoDiv>
              <Link href="/" text="Privacy Policy" />
              <InfoSpan>and</InfoSpan>
              <Link href="/" text="Terms of services" />
            </InfoDiv>
          </AuthForm>
        </Center>
      </StyledMain>
    </Container>
  );
}

export default Login;

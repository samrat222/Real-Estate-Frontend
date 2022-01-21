import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { userName, password });
  // };

  return (
    <Container>
      <Form>
        <Heading>Login</Heading>
        <Label for="username">Full Name</Label>
        <Input
          name="username"
          type="text"
          placeholder="Your Name"
          // required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label for="password">Password</Label>
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          // required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          name="submit"
          // onClick={handleLogin}
          disabled={isFetching}
        >
          Log in
        </Button>
        {error && <Error>Something went wrong...</Error>}
        <Msg>
          Don't have an account ? <a href="">create account</a>{" "}
        </Msg>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 450px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #26242e;
  background: #f6f8fb;
`;

const Form = styled.form`
  width: 250px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 45px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding-left: 0.7rem;
  outline: none;
`;

const Button = styled.button`
  width: 250px;
  height: 45px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: #1294fc;
  color: #fff;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Msg = styled.div`
  font-size: 16px;
  text-align: center;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Label = styled.label``;

const Error = styled.span`
  color: red;
`;

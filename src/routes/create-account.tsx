import {styled} from "styled-components";
import React, { useState } from "react";

const Title = styled.h1`
font-size: 42px;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 420px;
    padding: 50px 0px;

`

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;
export const CreateAccount = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUserName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange =(event: React.ChangeEvent<HTMLInputElement>) =>{
        const {target: {name, value}} = event;
        switch(name){
            case "username":
                setUserName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try{}
        catch (error){
            setError(error);
        }
        finally{
            setIsLoading(false);
        }
    }
    return (
        <Wrapper>
            <Title>Log into 𝕏</Title>
            <Form onSubmit={onSubmit}>
                <Input 
                onChange={onChange}
                name="username"
                value={username}
                placeholder="User Name"
                type="text"/>
                <Input 
                onChange={onChange}
                name="email"
                value={email}
                placeholder="Email"
                type="email"/>
                <Input 
                onChange={onChange}
                name="password"
                value={password}
                placeholder="Password"
                type="password"/>
                <Input
                type="submit"
                value={isLoading? "Loading...": "Create Account"}/>
            </Form>
            {error !== ""? <Error>{error}</Error>: null}
        </Wrapper>
    )
}

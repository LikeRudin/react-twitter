import {styled} from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.config";
import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`;

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isLoading || email === "" || password === "") return;
        try{
            setIsLoading(true);
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            const user = credentials.user;
            console.log("logged in userdata:");
            console.log(user);

        }
        catch (e) {
            if (e instanceof FirebaseError){
            const  { code, message} = e;
            console.log(`${code}, ${message}`);
            setError(`${code}:${message}`);
        } else { 
            console.log(e);
        }
        }
        finally{
            setIsLoading(false);

        }
    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = event;
        switch(name){
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }
    return(
        <>
        <Wrapper>
            <Title>Log into 𝕏</Title>
            <Form onSubmit={onSubmit}>
                <Input 
                    onChange={onChange}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email"
                />
                <Input 
                    onChange={onChange}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <Input
                    type="submit"
                    value={isLoading? "Loading...": "Login with Email"}/>
            </Form>
            <Switcher>
                Don't have account yet? <Link to="/create-account">Create Account &rarr;</Link>
            </Switcher>
            {error? <Error/> : null}
        </Wrapper>
        </>
    )
}

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "@/firebase.config";
import { useNavigate, Link } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {Input, Form, Switcher, Title, Error, Wrapper} from "@/components/auth-components";


export const CreateAccount = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
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
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if(isLoading || username === "" || email === "" || password === "" )return;
        try{
            setIsLoading(true);
            const credentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            console.log(credentials.user);
            await updateProfile(credentials.user, {
                displayName: username,
            });
            navigate("/");
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
    return (
        <Wrapper>
            <Title>Join into 𝕏</Title>
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
            <Switcher>
                Already have an account? <Link to="/login">Log in &rarr;</Link>
            </Switcher>
            {error !== ""? <Error>{error}</Error>: null}
        </Wrapper>
    )
}

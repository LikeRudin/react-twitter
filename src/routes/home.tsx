import styled from "styled-components"
import {auth} from "@/firebase.config";

const Button = styled.button`
width: 250px;
height: 80px;
`

export const Home = () => {
    const logout = () => {
        auth.signOut();
    }
    return (
        <>
            <span> "this is home"</span>
            <Button onClick={logout}>Log Out!</Button>
        </>
    )
}


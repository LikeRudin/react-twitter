import {auth} from "@/firebase.config";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        {auth.currentUser !== null? <h1>you are logged in!</h1>: navigate("/login")}   
        </>
    )
}
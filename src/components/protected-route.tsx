import { auth } from "@/firebase.config";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const user = auth.currentUser;
    if (user === null) {
        return (<Navigate to="/login"/>)
    }
    return children;
}

export default ProtectedRoute;
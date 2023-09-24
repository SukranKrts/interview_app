import React from "react";
import Appbar from "../components/Appbar";
import { useAuth0 } from "@auth0/auth0-react";

function HomePage() {
    const { isAuthenticated, user } = useAuth0();

    return (
        
            <div>
                <Appbar />
            </div>
        
    );
}

export default HomePage;
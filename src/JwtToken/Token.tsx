import { useAuth0 } from "@auth0/auth0-react";


function Token(){
    const { user } = useAuth0();

    return(
        <div></div>
    )
}

export default Token;

import { Button} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function LoginPage() {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log(user);

    const navigate = useNavigate();
    function handleClick() {
        isAuthenticated ? navigate("/home") : loginWithRedirect();
    }
    return (
        <div className='App'>
            <Button variant='outlined' onClick={() => handleClick()}>Login</Button>
        </div>
    );
}
export default LoginPage;
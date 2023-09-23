import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SigninPage() {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/login");
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent sx={{top: 10}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Giriş Yap
                    </Typography>
                    <div>
                        <TextField
                            id="standard-mail-input"
                            label="Mail"
                            type="mail"
                            variant="standard"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </div>
                </CardContent>
                <br/>
                <div>
                    <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                        <Button variant='text'>Giriş Yap</Button>
                        <Button variant='text' onClick={handleClick}>Kayıt Ol</Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}

export default SigninPage;
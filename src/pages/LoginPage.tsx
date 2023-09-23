import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/home");
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Kayıt Ol
                    </Typography>
                    <div>
                        <TextField
                            required
                            id="standard-user"
                            label="Kullanıcı Adı"
                            type="text"
                            variant="standard"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField
                            required
                            id="standard-mail"
                            label="Mail"
                            type="mail"
                            variant="standard"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField
                            required
                            id="standard-password"
                            label="Şifre"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField
                            required
                            id="standard-password2"
                            label="Şifre Tekrar"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    </div>
                    <br />
                </CardContent>
                <div>
                    <CardActions>
                        <Button variant='outlined' onClick={handleClick}>Kayıt Ol</Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    )
}
export default LoginPage;
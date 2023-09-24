import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth0 } from '@auth0/auth0-react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function MyDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { user } = useAuth0();

    return (
        <div>
            <Button onClick={handleClickOpen} style={{ color: 'black' }}>
                Profile
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {user?.name}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <div>
                    <TextField
                        id="standard-read-only-input"
                        defaultValue={user?.nickname}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    /></div><br/><div>
                    <TextField
                        id="standard-read-only-input"
                        defaultValue= {user?.email}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    /></div>
                    <br/><div>
                    <TextField
                        id="standard-read-only-input"
                        defaultValue= {"Uyruğu: "+user?.locale}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    /></div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default MyDialog;

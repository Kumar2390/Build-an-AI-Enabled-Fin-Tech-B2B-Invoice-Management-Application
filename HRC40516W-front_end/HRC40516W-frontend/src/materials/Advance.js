import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../App.css';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className='size' variant="outlined" onClick={handleClickOpen}>
                ADVANCE SEARCH
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <div className='Dialog'>
                    <DialogTitle>Advance Search</DialogTitle>
                    <DialogContent>
                        <div className='col1'>
                            <div className='col2'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a1"
                                    label="Document ID"
                                    type="text"
                                    fullWidth
                                    variant="filled"

                                />
                                <TextField
                                    className='textinput'
                                    margin="normal"
                                    id="a2"
                                    type="text"
                                    label="Customer Number"
                                    fullWidth
                                    variant="filled"
                                />
                            </div>
                            <div className='col2'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a3"
                                    type="text"
                                    label="Invoice Id"
                                    fullWidth
                                    variant="filled"

                                />
                                <TextField
                                    className='textinput'
                                    margin="normal"
                                    id="a4"
                                    type="text"
                                    label="Business Year"
                                    fullWidth
                                    variant="filled"
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button className='last' variant='outlined' onClick={handleClose}>SUMBIT</Button>
                        <Button className='last' variant='outlined' onClick={handleClose}>CANCEL</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}
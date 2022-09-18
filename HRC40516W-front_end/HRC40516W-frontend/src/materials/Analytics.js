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
                ANALYTICS VIEW
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <div className='Dialog'>
                    <DialogTitle>Analytics View</DialogTitle>
                    <DialogContent>
                        <div class="flex-parent">
                            <div class="flex-child">
                                <div>
                                    <text>Clear Date</text>
                                    <TextField
                                        className='textinput'
                                        margin="dense"
                                        id="a1"
                                        type="date"
                                        fullWidth
                                        variant="filled"

                                    />
                                    <TextField
                                        className='textinput'
                                        margin="normal"
                                        id="a2"
                                        type="date"
                                        fullWidth
                                        variant="filled"
                                    />
                                </div>
                                <div>
                                    <text>Baseline Create Date</text>
                                    <TextField
                                        className='textinput'
                                        margin="dense"
                                        id="a3"
                                        type="date"
                                        fullWidth
                                        variant="filled"

                                    />
                                    <TextField
                                        className='textinput'
                                        margin="normal"
                                        id="a4"
                                        type="date"
                                        fullWidth
                                        variant="filled"
                                    />
                                </div>
                            </div>
                            <div class="flex-child">
                                <text>Due Date</text>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a5"
                                    type="date"
                                    fullWidth
                                    variant="filled"

                                />
                                <TextField
                                    className='textinput'
                                    margin="normal"
                                    id="a6"
                                    type="date"
                                    fullWidth
                                    variant="filled"
                                />
                                <text>Invoice Currency</text>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a7"
                                    label="Invoice Currency"
                                    type="text"
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
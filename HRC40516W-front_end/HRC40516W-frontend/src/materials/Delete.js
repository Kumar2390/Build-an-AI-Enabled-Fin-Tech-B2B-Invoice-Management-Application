import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getThemeProps } from '@mui/system';
import { deleteData } from './data';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = () => {
        const delSelected = props.newSelected
        var i = 0;
        while (i < delSelected.length) {
            const data = {
                "sl_no": delSelected[i]
            }
             deleteData(data);
            i++;
        }
        setOpen(false);
    }

    return (
        <div>
            <Button disabled={props.isDel} className='Sizes' variant="outlined" onClick={handleClickOpen}>
                DELETE
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <div className='Dialog'>
                    <DialogTitle>Delete Records ?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div className='colour'>
                                Are you sure you want to delete these record[s] ?
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className='last' variant='outlined' onClick={handleClose}>CANCEL</Button>
                        <Button className='last' variant='outlined' onClick={onDelete}>DELETE</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}
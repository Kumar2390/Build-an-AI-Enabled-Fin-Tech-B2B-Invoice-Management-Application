import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../App.css'
import { editData } from './data';

export default function FormDialog( props ) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let [invoice_currency, setInvoice_currency]=React.useState();
    let [cust_payment_terms, setCust_payment_terms]=React.useState();


    const onEdit = () => {
        const sl_no = props.newSelected[0]
        const data={

            "sl_no": sl_no,
            "invoice_currency":invoice_currency,
            "cust_payment_terms": cust_payment_terms
        }
        editData(data);
        setOpen(false);
    }

    return (
        <div>
            <Button disabled={ props.isEnable } className='Sizes' variant='outlined' onClick={handleClickOpen}>
                EDIT
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <div className='Dialog'>
                    <DialogTitle>Edit</DialogTitle>
                    <DialogContent>
                        <div className='row'>
                            <div className='r1'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a1"
                                    label="Invoice Currency"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setInvoice_currency(e.target.value)}
                                />
                            </div>
                            <div className='r1'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a2"
                                    label="Customer Payment Terms"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setCust_payment_terms(e.target.value)}
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button className='last' variant='outlined' onClick={onEdit}>EDIT</Button>
                        <Button className='last' variant='outlined' onClick={handleClose}>CANCEL</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}

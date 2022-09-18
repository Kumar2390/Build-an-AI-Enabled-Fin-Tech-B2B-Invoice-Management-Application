import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../App.css'
import { addData } from './data';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let [business_code, setBusiness_code]=React.useState();
    let [cust_number, setCust_number] = React.useState();
    let [clear_date, setClear_date] = React.useState();
    let [buisness_year, setBuisness_year] = React.useState();
    let [doc_id, setDoc_id] = React.useState();
    let [posting_date, setPosting_date] = React.useState();
    let [document_create_date, setDocument_create_date] = React.useState();
    let [due_in_date, setDue_in_date] = React.useState();
    let [invoice_currency, setInvoice_currency] = React.useState();
    let [document_type, setDocument_type] = React.useState();
    let [posting_id, setPosting_id] = React.useState();
    let [total_open_amount, setTotal_open_amount] = React.useState();
    let [baseline_create_date, setBaseline_create_date] = React.useState();
    let [cust_payment_terms, setcust_payment_term] = React.useState();
    let [invoice_id, setInvoice_id] = React.useState();

    const onAdd = () => {
        const data = {
            "business_code": business_code,
            "cust_number": cust_number,
            "clear_date": clear_date,
            "buisness_year": buisness_year,
            "doc_id": doc_id,
            "posting_date": posting_date,
            "document_create_date": document_create_date,
            "due_in_date": due_in_date,
            "invoice_currency": invoice_currency,
            "document_type": document_type,
            "posting_id": posting_id,
            "total_open_amount": total_open_amount,
            "baseline_create_date": baseline_create_date,
            "cust_payment_terms": cust_payment_terms,
            "invoice_id": invoice_id
        }
        addData(data);
        setOpen(false);
    };

    return (
        <div>
            <Button className='Size' variant="outlined" onClick={handleClickOpen}>
                ADD
            </Button>
            <Dialog maxWidth="lg" open={open} onClose={handleClose}>
                <div className='Dialog'>
                    <DialogTitle>Add</DialogTitle>
                    <DialogContent>
                        <div className='row'>
                            <div className='r1'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a1"
                                    label="Business Code"
                                    type="text"
                                    autoFocus
                                    fullWidth
                                    variant="filled"
                                    onBlur={(e)=>setBusiness_code(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a2"
                                    label="Document id"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setDoc_id(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a3"
                                    label="Invoice Currency"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setInvoice_currency(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a4"
                                    label="Baseline Create Date"
                                    type="date"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setBaseline_create_date(e.target.value)}
                                />
                            </div>
                            <div className='r1'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a5"
                                    label="Customer Number"
                                    type="number"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setCust_number(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a6"
                                    label="Posting Date"
                                    type="date"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setPosting_date(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a7"
                                    label="Document type"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setDocument_type(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a8"
                                    label="Customer Payment Terms"
                                    type="text"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setcust_payment_term(e.target.value)}
                                />
                            </div>
                            <div className='r1'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a9"
                                    label="Clear Date"
                                    type="date"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setClear_date(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a10"
                                    label="Document Create Date"
                                    type="date"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setDocument_create_date(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a11"
                                    label="Posting Id"
                                    type="number"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setPosting_id(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a12"
                                    label="Invoice Id"
                                    type="number"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setInvoice_id(e.target.value)}
                                />
                            </div>
                            <div className='r1'>
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a13"
                                    label="Business Year"
                                    type="number"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setBuisness_year(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a14"
                                    label="Due Date"
                                    type="date"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setDue_in_date(e.target.value)}
                                />
                                <TextField
                                    className='textinput'
                                    margin="dense"
                                    id="a15"
                                    label="Total open amount"
                                    type="number"
                                    fullWidth
                                    variant="filled"
                                    autoFocus
                                    onBlur={(e) => setTotal_open_amount(e.target.value)}
                                />
                            </div>
                        </div>
                    </DialogContent >
                    <DialogActions>
                        <Button className='last' variant='outlined' onClick={onAdd}>ADD</Button>
                        <Button className='last' variant='outlined' onClick={handleClose}>CANCEL</Button>
                    </DialogActions>
                </div>
            </Dialog >
        </div >
    );
}
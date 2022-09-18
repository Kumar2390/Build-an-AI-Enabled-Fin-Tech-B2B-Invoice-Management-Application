import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import './Table.css';
import { Typography } from '@mui/material';
import { addData, getData } from './data';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Predict from './Predict';
import Analytics from './Analytics';
import Advance from './Advance';
import RefreshIcon from '@mui/icons-material/Refresh';
import { TextField } from '@mui/material';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import { searchData } from './data';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'sl_no',
        numeric: true,
        disablePadding: true,
        label: 'Sl no',
    },
    {
        id: 'business_code',
        numeric: true,
        disablePadding: true,
        label: 'Business Code',
    },
    {
        id: 'cust_number',
        numeric: true,
        disablePadding: true,
        label: 'Customer Number',
    },
    {
        id: 'clear_date',
        numeric: true,
        disablePadding: true,
        label: 'Clear Date',
    },
    {
        id: 'buisness_year',
        numeric: true,
        disablePadding: true,
        label: 'Bussiness Year',
    },
    {
        id: 'doc_id',
        numeric: true,
        disablePadding: true,
        label: 'Document Id',
    },
    {
        id: 'posting_date',
        numeric: true,
        disablePadding: true,
        label: 'Posting Date',
    },
    {
        id: 'document_create_date',
        numeric: true,
        disablePadding: true,
        label: 'Document Create Date',
    },
    {
        id: 'due_in_date',
        numeric: true,
        disablePadding: true,
        label: 'Due Date',
    },
    {
        id: 'invoice_currency',
        numeric: true,
        disablePadding: true,
        label: 'Invoice Currency',
    },
    {
        id: 'document_type',
        numeric: true,
        disablePadding: true,
        label: 'Document Type',
    },
    {
        id: 'posting_id',
        numeric: true,
        disablePadding: true,
        label: 'Posting Id',
    },
    {
        id: 'total_open_amount',
        numeric: true,
        disablePadding: true,
        label: 'Total Open amount',
    },
    {
        id: 'baseline_create_date',
        numeric: true,
        disablePadding: true,
        label: 'Baseline Create Date',
    },
    {
        id: 'cust_payment_terms',
        numeric: true,
        disablePadding: true,
        label: 'Cust payment terms',
    },
    {
        id: 'invoice_id',
        numeric: true,
        disablePadding: true,
        label: 'Invoice Id',
    },
    {
        id: 'aging_bucket',
        numeric: true,
        disablePadding: true,
        label: 'Aging Bucket',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all sl_no',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        // align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('sl_no');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [isEnable, setisEnable]= useState(true);
    const [isDel, setisDel]= useState(true);

    const [data, setData] = useState([]);
    const [addobject, setAddObject]=useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(async () => {
        setData(await getData())
    }, []);

    const onRefresh= async() => {
        setData(await getData())
    }


    const simplesearch = (searchValue) => {
        setSearchInput(searchValue);
        debugger;
        if (searchValue !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setData(filteredData)
        }
        else{
            setData(data)
        }
    }

    const handleRequestSort = (_event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n) => n.sl_no);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
        
        if(newSelected.length === 1){
            setisEnable(false);
        }
        else{
            setisEnable(true);
        }

        if(newSelected.length !=0){
            setisDel(false);
        }
        else{
            setisDel(true);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    return (
        <>
            <div className='align'>
                <Predict />
                <Analytics />
                <Advance setData={setData} />
                <Button onClick={onRefresh} className='refresh' variant="outlined"><RefreshIcon /></Button>
                <div className='searchbutton'>
                    <TextField onChange={(e) => simplesearch(e.target.value) } className='search' label="Search Custumer Id" margin="dense" type="search" variant="filled"></TextField>
                </div>
                <Add />
                <Edit isEnable={ isEnable } newSelected={ selected } />
                <Delete isDel={ isDel } newSelected={ selected } />
            </div>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={data.length}
                            />
                            <TableBody>
                                {stableSort(data, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((data, index) => {
                                        const isItemSelected = isSelected(data.sl_no);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, data.sl_no)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={data.sl_no}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="normal"
                                                >
                                                    <Typography className='roco' > {data.sl_no} </Typography>
                                                </TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.business_code} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.cust_number} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.clear_date} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.buisness_year} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.doc_id} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.posting_date} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.document_create_date} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.due_in_date} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.invoice_currency} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.document_type} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.posting_id} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.total_open_amount} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.baseline_create_date} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.cust_payment_terms} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.Invoice_id} </Typography></TableCell>
                                                <TableCell align="left"> <Typography className='roco' > {data.aging_bucket} </Typography></TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </>
    );
}
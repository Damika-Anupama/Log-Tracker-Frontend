import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Box, Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';
import Title from './Title';

function createData(
    id: number,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: number,
) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const generateRows = () => {
    const newRows = [];
    for (let i = 0; i < 30; i++) {
        newRows.push(
            createData(
                i,
                `16 Mar, 2019-${i}`,
                `Name ${i}`,
                `Location ${i}`,
                'VISA ⠀•••• 1234',
                100 + i * 10,
            ),
        );
    }
    return newRows;
};

const rows = generateRows();

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

const defaultTheme = createTheme();

export default function GetLogs() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Title>Get Logs</Title>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid container spacing={2}>
                    {/* Form Section */}
                    <Grid item xs={12} sm={6}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        {/* Log Selection Dropdown */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="logSelectionLabel">Choose Log Group</InputLabel>
                                <Select
                                    labelId="logSelectionLabel"
                                    id="logSelection"
                                    label="Choose Log Group"
                                    required
                                >
                                    <MenuItem value="up">Up</MenuItem>
                                    <MenuItem value="down">Down</MenuItem>
                                    <MenuItem value="left">Left</MenuItem>
                                    <MenuItem value="right">Right</MenuItem>
                                    <MenuItem value="click">Click</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Date Picker */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="logDate"
                                label="Log Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        {/* Time Pickers */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="fromTime"
                                label="From Time"
                                type="time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="toTime"
                                label="To Time"
                                type="time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Get Log Information
                            </Button>
                        </Box>
                    </Grid>

                    {/* Table Section */}
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <React.Fragment>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Name</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.name}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <TablePagination
                                    rowsPerPageOptions={[10, 20, 30]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </React.Fragment>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import * as React from 'react';
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

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Elvis Presley',
        'Tupelo, MS',
        'VISA ⠀•••• 3719',
        312.44,
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Paul McCartney',
        'London, UK',
        'VISA ⠀•••• 2574',
        866.99,
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(
        3,
        '16 Mar, 2019',
        'Michael Jackson',
        'Gary, IN',
        'AMEX ⠀•••• 2000',
        654.39,
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Bruce Springsteen',
        'Long Branch, NJ',
        'VISA ⠀•••• 5919',
        212.79,
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}
const defaultTheme = createTheme();
export default function GetLogs() {
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
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
                </Box>
            </Container>
        </ThemeProvider>
    );
}
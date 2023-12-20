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
import { Box, Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Title from './Title';
import { getLogService } from '../../Service/log-service';
import { postLogService } from '../../Service/log-service';

function createData(
    id: number,
    timestamp: string,
    xLoc: number,
    yLoc: number,
) {
    return { id, timestamp, xLoc, yLoc };
}

const generateRows = () => {
    const newRows = [];
    for (let i = 0; i < 30; i++) {
        newRows.push(
            createData(
                i,
                `09:${i < 10 ? '0' + i : i} PM`,
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
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
    const [logGroup, setLogGroup] = React.useState(''); // State to store selected log group
    const [logDate, setLogDate] = React.useState(''); // State to store selected log date
    const [fromTime, setFromTime] = React.useState(''); // State to store selected from time
    const [toTime, setToTime] = React.useState(''); // State to store selected to time

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // Prepare the log object to be sent
        const log = {
          group: logGroup,
          date: logDate,
          from: fromTime,
          to: toTime,
        };
    
        try {
          // Send the log object to the log-service
        //   await postLogService(log);
          
          // Retrieve updated logs based on the new filters
          const logs = await getLogService(logGroup, logDate, fromTime, toTime);
          
          // Update the state with the new logs
          // (Assuming that getLogs returns the relevant data format)
          // setRows(logs); // Update the state with the new logs
        } catch (error) {
          console.error('Error submitting log:', error);
        }
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
                          value={logGroup}
                          onChange={(e) => setLogGroup(e.target.value as string)}
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
                        value={logDate}
                        onChange={(e) => setLogDate(e.target.value)}
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
                        value={fromTime}
                        onChange={(e) => setFromTime(e.target.value)}
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
                        value={toTime}
                        onChange={(e) => setToTime(e.target.value)}
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
                          <TableCell>TimeStamp</TableCell>
                          <TableCell>x-loc</TableCell>
                          <TableCell>y-loc</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.timestamp}</TableCell>
                            <TableCell>{row.xLoc}</TableCell>
                            <TableCell>{row.yLoc}</TableCell>
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
    
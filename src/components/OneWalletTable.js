import {Table, TableContainer, TableCell, TableRow, TableHead, Paper, TableBody, Typography} from "@mui/material";



function createData(name, amount) {
  return { name, amount};
}

const rows = [
  createData('Mosószer', -1000),
  createData('Találtam a parkolóban', 1000),
  createData('Fagyi', -1000),
];

export default function OneWalletTable() {
  return (
		<>
		<Typography variant={"h6"}>Tranzakciók</Typography>
		<br/>
    <TableContainer component={Paper}>
      <Table sx={12} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tétel</TableCell>
            <TableCell align="right">Összeg (Ft)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
  );
}
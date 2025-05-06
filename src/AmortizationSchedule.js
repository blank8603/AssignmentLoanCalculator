import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Stack,
  Grid,
  Button,
} from "@mui/material";

const AmortizationSchedule = ({
  loanAmount,
  interestRate,
  loanTerm,
  setMonthlyPayment,
}) => {
  const [schedule, setSchedule] = useState([]);
  const [currency, setcurrency] = useState("USD");
  const [monthlyPay, setMonthlyPay] = useState(null);

  const handleCurrencyChange = (event) => {
    setcurrency(event.target.value); // Update the selected currency
  };

  const handleReset = () => {
    setMonthlyPayment(null);
  };

  useEffect(() => {
    const generateAmortizationSchedule = () => {
      const monthlyRate = interestRate / 100 / 12; // Convert annual rate to monthly rate
      const totalPayments = loanTerm * 12; // Total number of payments (months)

      const x = Math.pow(1 + monthlyRate, totalPayments);
      const EMI = (loanAmount * monthlyRate * x) / (x - 1);
      const monthlyEMI = EMI.toFixed(2);

      let balance = loanAmount;
      let tempSchedule = [];

      for (let month = 1; month <= totalPayments; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = EMI - interestPayment;

        balance -= principalPayment;
        if (balance < 0) balance = 0;

        tempSchedule.push({
          month,
          payment: EMI.toFixed(2),
          interest: interestPayment.toFixed(2),
          principal: principalPayment.toFixed(2),
          balance: balance.toFixed(2),
        });
      }
      setSchedule(tempSchedule);
      setMonthlyPay(monthlyEMI);
    };

    if (loanAmount && interestRate && loanTerm) {
      generateAmortizationSchedule();
    }
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
        <Typography variant="h6">Monthly Payment:</Typography>
        <Typography variant="h6" sx={{ fontWeight: "normal" }}>
          ${monthlyPay}
        </Typography>
      </Stack>

      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            sx={{ minWidth: 100, mb: 2 ,mt:2 }}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
          </Select>
        </Grid>

        <Grid item xs>
          {/* Empty space to push the button to the right */}
        </Grid>

        <Grid item>
          <Button
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "20",
              color: "darkviolet",
              borderColor: "darkviolet",
              p:"10px" // Ensures the button width matches its content
            }}
            onClick={handleReset}
          >
            RESET TABLE
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
        Amortization Schedule ({currency})
      </Typography>
      {/* Scrollable container */}
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 400, // Adjust height
          borderRadius: 2,
          mt: 2, // Rounded corners
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>

              <TableCell>Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((entry) => (
              <TableRow key={entry.month}>
                <TableCell>{entry.month}</TableCell>
                <TableCell>
                  {entry.principal} {currency}
                </TableCell>
                <TableCell>
                  {entry.interest} {currency}
                </TableCell>

                <TableCell>
                  {entry.balance} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AmortizationSchedule;

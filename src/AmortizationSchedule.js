import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Select,MenuItem} from '@mui/material';

const AmortizationSchedule = ({ loanAmount, interestRate, loanTerm }) => {
  const [schedule, setSchedule] = useState([]);
  const [currency,setcurrency] = useState("USD");
  const handleCurrencyChange = (event) => {
    setcurrency(event.target.value); // Update the selected currency
  };

  useEffect(() => {
    const generateAmortizationSchedule = () => {
      const monthlyRate = interestRate / 100 / 12; // Convert annual rate to monthly rate
      const totalPayments = loanTerm * 12; // Total number of payments (months)
      
      const x = Math.pow(1 + monthlyRate, totalPayments);
      const EMI = (loanAmount * monthlyRate * x) / (x - 1);

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
    };

    if (loanAmount && interestRate && loanTerm) {
      generateAmortizationSchedule();
    }
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, mt:4 }}>
        Amortization Schedule ({currency})
      </Typography>
      <Select
          value={currency}
          onChange={handleCurrencyChange}
          sx={{ minWidth: 100 , mb:2}}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
        </Select>

      {/* Scrollable container */}
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 400, // Adjust height
          borderRadius: 2,
          mt:2   // Rounded corners
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
                <TableCell>{entry.month} {currency}</TableCell>
                <TableCell>{entry.principal} {currency}</TableCell>
                <TableCell>{entry.interest} {currency}</TableCell>
                
                <TableCell>{entry.balance} {currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AmortizationSchedule;

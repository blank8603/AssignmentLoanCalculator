import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
 
  Grid,
  Container,
} from "@mui/material";
import Header from "./Header";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = () => {
    if(loanAmount!==""&&!interestRate!==""&&!loanTerm!==""){
    const monthlyRate = interestRate / 100 / 12;
    const payments = loanTerm * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (loanAmount * x * monthlyRate) / (x - 1);
    setMonthlyPayment(monthly.toFixed(2));
    }else{
      return(
        <div>hi</div>
      )
    }
  };

  return (
    <div>
      <Header />
      <Container 
        sx={{
         
          
        }}>
        {/* Main Header - matches the screenshot */}

        {/* Subheader from the screenshot */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "normal",
            mb: 3,
            mt:5,
            
          }}
        >
          Loan Calculator Dashboard
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                label="Loan Amount"
                variant="outlined"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth 
                label="Interest Rate (%)"
                variant="outlined"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Loan Term (years)"
                variant="outlined"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
              />
            </Grid>
          </Grid>

          <Button
            maxWidth = "sm"
            variant="contained"
            color="primary"
            size="normal"
            onClick={calculatePayment}
            sx={{ py: 1, mt: 2 }}
          >
            CALCULATE
          </Button>
        </Box>

        {monthlyPayment && (
          <Box
            sx={{ mt: 4, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}
          >
            <Typography variant="h6">Monthly Payment:</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              ${monthlyPayment}
            </Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default LoanCalculator;

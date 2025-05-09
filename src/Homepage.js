import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";

import AmortizationSchedule from "./AmortizationSchedule"


const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("100000");
    const [interestRate, setInterestRate] = useState("8.5");
    const [loanTerm, setLoanTerm] = useState("5");
    const [monthlyPayment, setMonthlyPayment] = useState(null);
  
    const calculatePayment = () => {
      if (loanAmount !== "" && interestRate !== "" && loanTerm !== "") {
        setMonthlyPayment("1");
      }
    };
  
  
  
    return (
      <div>
        
        <Container sx={{}}>
          {/* Main Header - matches the screenshot */}
  
          {/* Subheader from the screenshot */}
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "normal",
              mb: 3,
              mt: 5,
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
              maxWidth="sm"
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
            <AmortizationSchedule
              loanAmount={loanAmount}
              interestRate={interestRate}
              loanTerm={loanTerm}
              setMonthlyPayment={setMonthlyPayment}
            />
          )}
        </Container>
      </div>
    );
  };
  
  export default LoanCalculator;
  
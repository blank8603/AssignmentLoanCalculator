import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";

const ExchangeRates = () => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Replace with your API URL
      const response = await fetch("https://v6.exchangerate-api.com/v6/8e2656c8995277c55f9935c8/latest/USD");
      const data = await response.json();
      setRates(data.conversion_rates);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data immediately on component mount
    fetchData();

    // Set up interval to fetch data every hour (3600000 ms)
    const interval = setInterval(() => {
      fetchData();
    }, 3600000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
        Exchange Rates (Base Currency: USD)
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : rates ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Currency</b>
                </TableCell>
                <TableCell align="right">
                  <b>Rate</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(rates).map(([currency, rate]) => (
                <TableRow key={currency}>
                  <TableCell>{currency}</TableCell>
                  <TableCell align="right">{rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography color="error">Failed to load data</Typography>
      )}
    </Container>
  );
};

export default ExchangeRates;

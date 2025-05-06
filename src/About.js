import React from "react";
import { Container, Typography, Box, Divider, Chip } from "@mui/material";
import { Code, Api, Calculate, Palette, Public } from "@mui/icons-material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 1. About This App */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "normal", mb: 2 }}>
          About This App
        </Typography>
        <Typography>
          This Loan Calculator App is a modern, single-page web application
          built using React JS and Material UI. It allows users to calculate
          loan EMIs (Equated Monthly Installments), view a detailed amortization
          schedule, and see real-time currency conversions of their EMI using
          live exchange rates.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 2. Instructions for Candidates */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Instructions for Candidates
        </Typography>
        <p>
          Please follow these instructions to complete and submit your project:{" "}
        </p>
        <Box component="ul" sx={{ pl: 2 }}>
          <li>Push the entire project to a public GitHub repository</li>
          <li>Make sure to commit regularly with clear messages</li>
          <li>Use the provided EMI formula to perform calculations</li>
          <li>Use Context API for global state management</li>
          <li>Create custom React hooks for reusable logic</li>
          <li>Integrate the ExchangeRate API for live currency conversion</li>
          <li>Ensure the app is fully responsive on all screen sizes</li>
          <li>Implement both light and dark modes</li>
          <li>Add a 404 Not Found page for unmatched routes</li>
          <li>Handle runtime errors gracefully</li>
          <li>Include a live deployment link in your GitHub repo</li>
          <li>Deploy the project on any platform</li>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 3. Features */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Features
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <li>Loan EMI calculation using standard financial formulas</li>
          <li>Dynamic amortization schedule table</li>
          <li>Real-time currency conversion using exchange rate API</li>
          <li>Paginated exchange rate table for 160+ currencies</li>
          <li>Dark/Light mode toggle</li>
          <li>Collapsible mobile navigation</li>
          <li>Fully responsive Material UI design</li>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 4. Technologies Used */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Technologies Used
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <li>React (Hooks, Routing, Context API)</li>
          <li>Material UI for styling and responsive components</li>
          <li>Axios for API calls</li>
          <li>Exchange Rate API for real-time currency conversion</li>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 5. EMI Formula Used */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          EMI Formula Used
        </Typography>
        <Typography
          sx={{
            bgcolor: "action.hover",
            p: 2,
            borderRadius: 1,
            fontFamily: "monospace",
            display: "inline-block",
            mb: 2,
          }}
        >
          EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <li>P = Principal loan amount</li>
          <li>R = Monthly interest rate (annual rate / 12 / 100)</li>
          <li>N = Loan duration in months</li>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 6. Currency Conversion API */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Currency Conversion API
        </Typography>
        <Typography paragraph>
          This app integrates with ExchangeRate-API to fetch live exchange
          rates:
        </Typography>
        <Typography
          sx={{
            bgcolor: "action.hover",
            p: 2,
            borderRadius: 1,
            fontFamily: "monospace",
            mb: 2,
          }}
        >
          https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
        </Typography>
        <Typography>
        You must register and obtain a free API key to use this endpoint. Then, replace YOUR_API_KEY in the app code with your actual key.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 7. Purpose of This App */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Purpose of This App
        </Typography>
        <Typography paragraph>
          This project assesses React development skills including:
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          <li>React fundamentals (state, props, hooks)</li>
          <li>Component structure and reusability</li>
          <li>API integration and live data rendering</li>
          <li>Table/list implementation with pagination</li>
          <li>Theme customization (dark/light mode)</li>
          <li>Error handling and UI fallbacks</li>
          <li>Responsive design patterns</li>
        </Box>
        <Typography>
          Note: Currency conversion requires a valid API key and network access.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;

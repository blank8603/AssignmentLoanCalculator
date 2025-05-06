
import Container from "@mui/material/Container";


import React from "react";
import { AppBar, Toolbar, Button, Switch, Typography,Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = ({ toggleTheme, isDarkMode }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
        </Container>
        <Box sx={{ display: "flex", gap: 2 }}>
      <Button component={Link} to="/" color="inherit">
        Home
      </Button>
      <Button
        component={Link}
        to="/ExchangeRates"
        color="inherit"
        sx={{ whiteSpace: "nowrap" }}
      >
        EXCHANGE RATES(LIVE)
      </Button>
      <Button component={Link} to="/about" color="inherit" sx={{ whiteSpace: "nowrap" }}>
        About
      </Button>
      <Button component={Link} to="/error" color="inherit"sx={{ whiteSpace: "nowrap" }}>
        ERROR PAGE
      </Button>
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        color="default"
      />
    </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

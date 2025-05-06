import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = ({ toggleTheme, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "EXCHANGE RATES(LIVE)", to: "/ExchangeRates" },
    { label: "About", to: "/about" },
    { label: "ERROR PAGE", to: "/error" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar>
          <Container
            maxWidth="1200px"
            sx={{ display: "flex", alignItems: "center",padding: 0, // Removes default padding
              mx: "auto", }}
          >
            {/* Mobile Menu */}
            <IconButton
              edge="leftend"
              color="inherit"
              onClick={toggleDrawer}
              sx={{
                display: { xs: "block", md: "none" },
                mt: 1, // Show only on small screens
                mr: 2,
                // Add margin to the right
              }}
            >
              <MenuIcon />
            </IconButton>


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Loan Calculator
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" }, // Hide on small screens
                gap: 2,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.to}
                  component={Link}
                  to={item.to}
                  color="inherit"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              color="default"
            />

            
          </Container>
        </Toolbar>
      </AppBar>
 

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 270 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.to} component={Link} to={item.to}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem>
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                color="default"
              />
              <ListItemText primary="Dark Mode" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;

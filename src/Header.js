
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default  function Header() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loan Calculator
            </Typography>
            
          </Container>
          <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    );
  }
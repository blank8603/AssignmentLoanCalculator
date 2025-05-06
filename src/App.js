import React from "react";
import { BrowserRouter as Router, Routes, Route ,useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";
import Navigation from "./Navigation";
import AboutPage from "./About";
// import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import Exchangerates from "./Exchangerates";

const AppContent = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation(); // Safe to use here, within Router
  const noNavbarPaths = ["/", "/about", "/ExchangeRates"]; 

  const shouldShowNavbar = noNavbarPaths.some((path) => location.pathname === path); // Paths where navbar shouldn't appear

  return (
    <>
      {/* Conditionally render the Navbar */}
      {shouldShowNavbar && (
        <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
       
        <Route path="/ExchangeRates" element={<Exchangerates />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AppContent toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
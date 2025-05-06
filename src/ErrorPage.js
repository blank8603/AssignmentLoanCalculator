import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography,Button} from "@mui/material";
import { Link } from "react-router-dom";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "grey.100",
      textAlign: "center",
    }}
  >
    <Box>
      
      <Typography variant="h4"  gutterBottom>
      Something went wrong in the application.
      </Typography>
      <Button variant="outlined" component={Link} to="/" color="inherit"
      sx={{
        
        width: "20",
        color: "blue",
        borderColor: "blue",
        p:"10px" // Ensures the button width matches its content
      }}>
       Go Home
      </Button>
    </Box>
  </Box>
  );
};

export default NotFound;

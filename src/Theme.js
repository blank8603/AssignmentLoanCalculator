import { createTheme } from "@mui/material/styles";



export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#6200ea" },
      secondary: { main: "#03dac6" },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#bb86fc" },
      secondary: { main: "#03dac6" },
    },
  });
  
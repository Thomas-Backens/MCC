import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3AD076",
    },
    secondary: {
      main: "#F85050",
    },
    surface: {
      white: "#FFFFFF",
      semiWhite: "#FAFAFA",
      black: "#393939",
      lightGrey: "#6A6A6A",
    },
    background: {
      default: "#2A2A2A",
    },
  },
  typography: {
    fontFamily: ["Poppins, sans-serif"].join(","),
    h1: {
      fontSize: "48.83px",
    },
    h2: {
      fontSize: "39.06px",
    },
    h3: {
      fontSize: "31.25px",
    },
    h4: {
      fontSize: "25px",
    },
    h5: {
      fontSize: "22px",
    },
    h6: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "16px",
    },
    bodyXSmall: {
      fontSize: "12.80px",
    },
    bodyXXSmall: {
      fontSize: "10.20px",
    },
  },
});

export default theme;

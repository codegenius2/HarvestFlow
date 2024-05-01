import { createTheme } from "@mui/material";


const gray = "#898989";
const darkBlue = "#25515B";
const lightBlue = "#57E7FB";
const black = "#000000";
const white = "#FFFFFF";

const squareLight = "#D8E9EB";
const squareDark = "#907B90";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1268,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: black,
      light: lightBlue,
      dark: "#000000",
      contrastText: gray,
    },
    secondary: {
      main: squareLight,
      light: squareLight,
      dark: squareDark,
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
    h2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 20,
      color: "black",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      color: black,
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      textAlign: "center",
      color: "black",
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: darkBlue,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          textAlign: "left",
        },
        icon: { color: "white" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ":hover .MuiOutlinedInput-notchedOutline": {
            borderColor: lightBlue,
          },
        },
        input: {
          color: "white",
          fontWeight: 700,
          fontSize: "18px",
        },
        notchedOutline: {
          borderColor: darkBlue,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: 700,
          fontSize: "14px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: black,
          color: white,
          fontWeight: 600,
          fontSize: "16px",
          width: "100%",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderColor: squareDark,
          backgroundColor: squareLight,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: darkBlue,
          "&.Mui-checked": {
            color: lightBlue,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: black,
        }
      }
    }
  },
});

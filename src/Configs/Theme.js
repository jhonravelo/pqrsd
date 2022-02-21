import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  spacing: 8,
  buttons: {},
  typography: {
    useNextVariants: true,
    fontSize: 16,
    fontFamily: '"Montserrat", "Roboto", "sans-serif"',
    fontWeight: "normal",
    font: {
      main: "Montserrat",
      second: "Roboto",
    },
    color: {
      main: "rgba(12,31,44,0.87)",
      default: "#747b87",
      second: "rgba(12,31,44,0.6)",
      light: "rgba(12,31,44,0.38)",
      lighter: "rgba(12,31,44,0.2)",
      black: "#000000",
      grey: "#707070",
    },
    h1: {
      // 40 px b.16
      fontSize: "2.5em",
      fontWeight: 500,
    },
    h2: {
      // 32 px b.16
      fontSize: "2em",
      fontWeight: 400,
    },
    h3: {
      // 28 px b.16
      fontSize: "1.75em",
    },
    h4: {
      // 24 px b.16
      fontSize: "1.5em",
    },
    h5: {
      // 20 px b.16
      fontSize: "1.25em",
    },
    h6: {
      // 16 px b.16
      fontSize: "1em",
    },
    body1: {
      // 13 px b.16
      fontSize: "0.813em",
    },
  },
  palette: {
    common: {
      black: "#333333",
      white: "#ffffff",
      borderColor: "#E1E1E1",
    },
    primary: {
      main: "#104eb2",
      lighter: "#E8F0FC",
      light: "#e9f2ff",
      disabled: "#A9C1E8",
      dark: "#003897",
      contrastText: "#ffffff",
      alternative: "#056CF2",
    },
    secondary: {
      main: "#69d6d6",
      light: "rgba(105, 214, 214, 0.08)",
      disabled: "#D9FFFF",
      dark: "#4ABABA",
      contrastText: "#ffffff",
    },
    color: {
      primary: "#104eb2",
      secondary: "#69d6d6",
      default: "#747b87",
      success: "#18cc48",
      warning: "#fcc52c",
      danger: "#FE685E",
      aquamarine: "#4be3e3",
      robinsegg: "55d5f6",
      tiffanyBlue: "#5ce0d1",
      lightMustard: "#f6cd6c",
      paleRed: "#de463b",
      paleGrey: "#d8dee8",
      whiteDark: "#e7e7e7",
      gunMetal: "#4b5660",
      cloudyBlue: "#b7becd",
      gasesGreen: "#9db93b",
      gasesLightBlue: "#6abac0",
      gasesBlue: "#244a95",
    },
    divider: "#DBDBDB",
    text: {
      default: "#000000",
      primary: "#333333",
      main: "#333333",
      blue: "#104eb2",
      greyDark: "#747b87",
      grey: "#B8B8B8",
      blackLight: "#555555",
      cardDark: "#696A6A",
      cardDarker: "#4E4E4E",
    },
    error: {
      lightest: "#fff0ef",
      light: "#fedfdc",
      main: "#FE685E",
      dark: "#BF2E2F",
    },
    warning: {
      light: "#fff8e4",
      main: "#fcc52c",
    },
    success: {
      lighter: "rgba(63, 212, 110, 0.1)",
      light: "#d6ffe1",
      main: "#18cc48",
      dark: "#18cc48",
    },
    background: {
      default: "#ffffff",
      layout: "#F8F9FB",
      alternative: "#fafafa",
      paper: "#ffffff",
      dark: "#f2f2f2",
      cardDark: "#f9f9f9",
      cardDarker: "#E5E5E5",
      transparentDark: "rgba(0, 0, 0, 0.63)",
      transparentLight: "rgba(255, 255, 255, 0.3)",
      transparentLighter: "rgba(0, 0, 0, 0.1)",
      border: "#DBDBDB",
    },
    points: {
      orange: "#EB671C",
      purpleDark: "#4C1E72",
    },
  },
  custom: {
    headerHeight: 64,
    footerHeight: {
      company: 64,
      stepper: 84,
    },
    borderRadius: 6,
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  overrides: {
    PrivateNotchedOutline: {
      legendLabelled: {
        fontSize: "0.8em",
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
    MuiSkeleton: {
      text: {
        height: 19.19,
        transform: "none",
        marginTop: 12.8,
        marginBottom: 12.8,
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: 14,
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#3f51b5",
      },
    },
    MuiPickersYear: {
      root: {
        "&$selected": {
          color: "#F2A138",
          "&:hover": {
            color: "#F2A138",
          },
        },
        "&:focus": {
          color: "#F2A138",
        },
      },
    },
  },
  breakpoints: {
    keys: ["xs", "xm", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      xm: 370,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Cases from "./components/cases";
import Countires from "./components/countries";

import Mapview from "./components/mapview";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  infoText: {
    marginTop: "20px"
  },

  mapview: {
    minHeight: "100vh"
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),

    h3: {
      fontSize: "1.0rem",
      fontWeight: 250,
      color: red
    },
    h2: {
      fontSize: "2.3rem",
      fontWeight: 500,
      color: red
    }
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h4" fontWeight="fontWeightBold" m={1}>
          Tracking the Coronavirus COVID-19
        </Typography>
        <ThemeProvider theme={theme}>
          <Typography
            className={classes.infoText}
            style={{ color: "rgb(115,118,124)", lineHeight: 1.6 }}
            variant="h3"
          >
            The first case of the new Coronavirus COVID-19 was recorded on 31
            December in Wuhan, China (WHO). Since then, 242,708 confirmed cases
            have been recorded worldwide. This visualization shows the near
            real-time status based on data from the Center for Systems Science
            and Engineering (CSSE) at Johns Hopkins University and DXY. Data
            currently available on the following zoom levels: City level - US,
            Canada and Australia; Province level - China; Country level - other
            countries. Learn how this map was created.
          </Typography>
        </ThemeProvider>

        <Cases />
        <Countires />
      </Grid>

      <Grid item xs={8} style={{ minHeight: "100vh" }}>
        <Mapview></Mapview>
      </Grid>
    </Grid>
  );
}

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const getDataAxios = async () => {
  const response = await axios.get("https://covid19.mathdro.id/api");
  // console.log(response.data);
  return response.data;
};

class Cases extends Component {
  constructor(props) {
    super(props);
    this.state = { death: 0, confirmed: 0, recoveries: 0 };
  }

  async componentDidMount() {
    const data = await getDataAxios();
    console.log(data, "Heree iss ur datttaaa");
    this.setState({
      death: data.deaths.value,
      confirmed: data.confirmed.value,
      recoveries: data.recovered.value
    });
  }

  render() {
    return (
      <ThemeProvider>
        <Grid container style={{ flexGrow: 1 }}>
          <Grid item xs={4}>
            <Typography
              style={{ color: "orange", lineHeight: 1.6, textAlign: "center" }}
              variant="h2"
            >
              {this.state.confirmed}
            </Typography>
            <Typography style={{ textAlign: "center" }}>Confirmed</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{ color: "orange", lineHeight: 1.6, textAlign: "center" }}
              variant="h2"
            >
              {this.state.death}
            </Typography>
            <Typography style={{ textAlign: "center" }}>Death</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              style={{ color: "orange", lineHeight: 1.6, textAlign: "center" }}
              variant="h2"
            >
              {this.state.recoveries}
            </Typography>
            <Typography style={{ textAlign: "center" }}>Recoveries</Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default Cases;

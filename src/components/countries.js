import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const getDataAxios = async () => {
  const response = await axios.get("https://covid19.mathdro.id/api/countries");
  return response.data;
};

class Countires extends Component {
  constructor(props) {
    super(props);
    this.state = { counties: {} };
  }
  async componentDidMount() {
    const data = await getDataAxios();
    console.log(data, "Heree iss ur datttaaa");
    this.setState({
      counties: data.countries
    });
  }

  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.state.counties).map((value, index) => {
            return (
              <li key={index}>
                <Paper style={{ height: "50px" }}>
                  <h4>{value}</h4>
                </Paper>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Countires;

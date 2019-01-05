//@flow
import React, { Component, Fragment } from "react";
import { AppBar as AppBarOrigin, Typography, Toolbar, Button, Grid, withStyles } from "@material-ui/core";

type Props = {};

const styles = {};

class AppBar extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBarOrigin position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Typography>たつや</Typography>
            <Button variant="contained">Login</Button>
          </Grid>
        </Toolbar>
      </AppBarOrigin>
    );
  }
}

export default withStyles(styles)(AppBar);

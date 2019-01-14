//@flow
import React, { Component, Fragment } from "react";
import { AppBar as AppBarOrigin, Typography, Toolbar, Button, Grid, withStyles } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

type Props = {
  classes: Object,
};

const styles = {
  toolBar: {
    backgroundColor: "navajowhite",
  },
  appTitle: {
    color: "dimgray",
    fontSize: "2rem",
    fontFamily: "serif",
  },
};

class AppBar extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBarOrigin position="static">
        <Toolbar className={classes.toolBar}>
          <Grid container justify="center" alignItems="center">
            <Typography className={classes.appTitle}>Dummy Diary Generator</Typography>
          </Grid>
        </Toolbar>
      </AppBarOrigin>
    );
  }
}

export default withStyles(styles)(AppBar);

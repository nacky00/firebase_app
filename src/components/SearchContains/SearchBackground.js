//@flow
import React, { Component, Fragment } from "react";
import { Paper, Typography, Toolbar, Button, Grid, withStyles } from "@material-ui/core";
import SearchBox from "./SearchBox";

type Props = {
  classes: Object,
};

const styles = {
  root: {
    height: "15rem",
  },
  title: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
};

class SearchBackground extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid container direction="column">
          <Grid item className={classes.title} style={{ textAlign: "center" }}>
            <Typography variant="display1">なんかそれっぽいタイトルみたいな文字</Typography>
          </Grid>
          <Grid item style={{ margin: "auto" }}>
            <SearchBox />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchBackground);

//@flow
import React, { Component, Fragment } from "react";
import { Paper, Typography, Toolbar, Button, Grid, withStyles } from "@material-ui/core";
import SearchBox from "./SearchBox";

type Props = {
  classes: Object,
};

const styles = {
  root: {
    height: "50vh",
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
        <SearchBox />
        <Typography>なんかそれっぽいタイトルみたいな文字</Typography>
        <Typography>なんかそれっぽいタイトルみたいな文字</Typography>
        <Typography>なんかそれっぽいタイトルみたいな文字</Typography>
        <Typography>なんかそれっぽいタイトルみたいな文字</Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchBackground);

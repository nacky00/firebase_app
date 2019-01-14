//@flow
import React, { Component, Fragment } from "react";
import { Paper, Typography, Toolbar, Button, Grid, withStyles } from "@material-ui/core";
import Card from "../commons/Card";
import Form from "../commons/Form";

type Props = {
  classes: Object,
};

const styles = {
  root: {
    paddingBottom: "5rem",
  },
  title: {
    paddingTop: "3rem",
    paddingBottom: "2rem",
  },
  form: {
    paddingBottom: "3rem",
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
            <Typography variant="h5" style={{ color: "grey" }}>
              あなたの日記を作ります
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }} className={classes.form}>
            <Form />
          </Grid>
          <Grid item style={{ margin: "auto" }}>
            <Card />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchBackground);

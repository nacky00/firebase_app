//@flow
import React, { Component, Fragment } from "react";
import { Paper, Typography, Toolbar, Button, Grid, withStyles } from "@material-ui/core";
import Card from "../commons/Card";
import Form from "../commons/Form";

type Props = {
  classes: Object,
};

type State = {
  name: string,
  emotion: ?string,
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

class SearchBackground extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emotion: null,
    };
  }

  handleSetEmotion = (string) => {
    this.setState({ emotion: string });
  };

  handleNameChange = (string) => {
    this.setState({ name: string });
  };

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
            <Form handleNameChange={this.handleNameChange} handleButtonClick={this.handleSetEmotion} />
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

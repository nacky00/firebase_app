//@flow
import React, { Component, Fragment } from "react";
import { TextField, Grid, Typography, Divider, IconButton, Button, withStyles } from "@material-ui/core";
import { MoodBad, SentimentDissatisfied, SentimentVerySatisfied } from "@material-ui/icons";

type Props = {};

type State = {
  name: string,
};

const styles = {
  name: {
    padding: "1rem",
  },
  icon: {
    fontSize: "3.5rem",
  },
  button: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
};

class Form extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name } = this.state;
    const { classes } = this.props;
    return (
      <Grid container direction="column">
        <Grid item className={classes.name}>
          <TextField
            id="name"
            label="なまえをいれてね"
            type="string"
            value={name}
            variant="outlined"
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item className={classes.name}>
          <Typography>いまどんなきもち？</Typography>
        </Grid>
        <Grid container spacing={16} wrap="nowrap" justify="center">
          <Grid item>
            <MoodBad className={classes.icon} />
          </Grid>
          <Grid item>
            <SentimentDissatisfied className={classes.icon} />
          </Grid>
          <Grid item>
            <SentimentVerySatisfied className={classes.icon} />
          </Grid>
        </Grid>
        <Grid item className={classes.button}>
          <Button variant="outlined">日記をつくる！</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Form);

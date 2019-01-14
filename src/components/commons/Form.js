//@flow
import React, { Component, Fragment, type Node } from "react";
import { TextField, Grid, Typography, Divider, IconButton, Button, withStyles } from "@material-ui/core";
import { MoodBad, SentimentDissatisfied, SentimentVerySatisfied } from "@material-ui/icons";

type Props = {};

type State = {
  name: string,
  buttonKind: ?string,
};

const styles = {
  name: {
    padding: "1rem",
  },
  askMessage: {
    paddingTop: "2rem",
  },
  icon: {
    fontSize: "3.5rem",
  },
  buttonContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  button: {
    color: "#ff5500",
    borderColor: "#FF8C00",
    backgroundColor: "#ffd9b3",
    "&:hover": {
      backgroundColor: "#FFEFD5",
    },
    "&:disabled": {
      borderColor: "#C0C0C0",
      backgroundColor: "#FFFFFF",
    },
  },
};

class Form extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      buttonKind: null,
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleButtonClick = (buttonKind) => () => {
    this.setState({ buttonKind: buttonKind });
  };

  render() {
    const { name, buttonKind } = this.state;
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
        <Grid item className={classes.askMessage}>
          <Typography>いまどんなきもち？</Typography>
        </Grid>
        <Grid container spacing={16} wrap="nowrap" justify="center">
          <Grid item>
            <IconButton onClick={this.handleButtonClick("angry")}>
              <MoodBad className={classes.icon} style={{ color: buttonKind === "angry" && "#cc1414" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={this.handleButtonClick("sad")}>
              <SentimentDissatisfied className={classes.icon} style={{ color: buttonKind === "sad" && "#4da6ff" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={this.handleButtonClick("happy")}>
              <SentimentVerySatisfied className={classes.icon} style={{ color: buttonKind === "happy" && "#ff66b3" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item className={classes.buttonContainer}>
          <Button variant="outlined" className={classes.button} disabled={buttonKind ? false : true}>
            日記をつくる！
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Form);

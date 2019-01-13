//@flow
import React, { Component, Fragment } from "react";
import { Typography, Card, CardContent, TextField, Button, Grid, withStyles } from "@material-ui/core";
import AchieveDialog from "./components/dialogs/AchieveDialog";
import AppBar from "./components/layout/AppBar";
import SearchBackground from "./components/SearchContains/SearchBackground";
import Main from "./components/layout/Main";

type Props = {
  classes: Object,
};

type State = {
  item: string,
  todayItem: string,
  open: boolean,
};

const styles = {
  root: {
    width: 345,
  },
  card: {
    maxWidth: 345,
    minWidth: 500,
    marginBottom: 20,
  },
  title: {
    backgroundColor: "#4682b4",
  },
  media: {
    height: 140,
  },
  form: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    paddingTop: 10,
  },
  achieveButton: {
    borderRadius: 8,
  },
  achieveButtonContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
};

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      todayItem: "",
      open: false,
    };
  }

  handleChange = (event: Object) => {
    this.setState({ item: event.target.value });
  };

  handleClick = () => {
    this.setState({ todayItem: this.state.item });
    this.setState({ item: "" });
    localStorage.setItem("todayItem", document.getElementById("todo-text").value);
  };

  handleAchieveClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ todayItem: "" });
  };

  render() {
    const { classes } = this.props;
    const { item, todayItem, open } = this.state;
    const defaultMessage = "まだ決まってないよ〜";

    return (
      <Fragment>
        <AppBar />
        <Main />
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);

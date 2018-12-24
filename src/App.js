//@flow
import React, { Component, Fragment } from "react";
import "./App.css";
import { Typography, Card, CardContent, TextField, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

type Props = {
  classes: Object,
};

type State = {
  item: string,
  items: Array<string>,
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
    backgroundColor: "##4682b4",
  },
  media: {
    height: 140,
  },
  todo: {
    marginBottom: 5,
  },
};

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      items: [],
    };
  }

  handleChange = (event: Object) => {
    this.setState({ item: event.target.value });
  };

  handleClick = () => {
    const addedItems = this.state.items;
    this.setState({ items: addedItems.push(this.state.item) });
    this.setState({ item: null });
  };

  render() {
    const { classes } = this.props;
    const { item, items } = this.state;
    console.log(item);
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardContent className={classes.title}>
            <Typography>今日やることは何かな？</Typography>
          </CardContent>
          <CardContent>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  className={classes.todo}
                  id="todo-text"
                  variant="outlined"
                  label="やること"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                  追加！
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography>達成できるように頑張ろう！</Typography>
            <Typography>{items}</Typography>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);

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
  todayItem: string,
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
};

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      todayItem: "",
    };
  }

  handleChange = (event: Object) => {
    this.setState({ item: event.target.value });
  };

  handleClick = () => {
    this.setState({ todayItem: this.state.item });
    this.setState({ item: "" });
  };

  render() {
    const { classes } = this.props;
    const { item, todayItem } = this.state;
    console.log(item);
    const defaultMessage = "まだ決まってないよ〜";

    return (
      <Fragment>
        <Grid container justify="center">
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.title}>
                <Typography style={{ textAlign: "center" }}>今日やることを決めよう！</Typography>
              </CardContent>
              <CardContent>
                <Grid container direction="column" alignItems="center">
                  <Grid item className={classes.form}>
                    <TextField
                      id="todo-text"
                      variant="outlined"
                      label="今日すること"
                      value={item}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.button}>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                      追加！
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <Typography>達成できるように頑張ろう！</Typography>
                  </Grid>
                  <Grid item className={classes.form}>
                    <Grid container>
                      <Grid item>
                        <Typography>{todayItem === "" ? defaultMessage : todayItem}</Typography>
                      </Grid>
                      <Grid item>ちぇっく</Grid>
                      <Grid item>できない</Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);

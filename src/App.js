//@flow
import React, { Component, Fragment } from "react";
import "./App.css";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

type Props = {
  classes: Object,
};

const styles = {
  root: {
    width: 345,
  },
  card: {
    maxWidth: 345,
    minWidth: 500,
  },
  media: {
    height: 140,
  },
};

class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography>今日のやることリスト(*´ω｀*)</Typography>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);

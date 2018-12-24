//@flow
import React, { Component, Fragment } from "react";
import "./App.css";
import { Typography, Card, CardContent } from "@material-ui/core";
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

const CustomCard = withStyles({
  root: {
    width: 345,
  },
})(Card);

class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CustomCard>
          <CardContent>
            <Typography>今日のやることリスト(*´ω｀*)</Typography>
          </CardContent>
        </CustomCard>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);

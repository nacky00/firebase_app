//@flow
import React, { Component, Fragment } from "react";
import {
  Card as CardOrigin,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Menu, Favorite } from "@material-ui/icons";

type Props = {};

const styles = {
  root: {
    width: "20rem",
  },
  header: {
    height: "5rem",
  },
  grid: {
    paddingTop: "1rem",
  },
};

class Card extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <CardOrigin className={classes.root}>
        <CardHeader className={classes.header} title="タイトル" subheader="2019/01/13" />
        <CardContent>
          <Typography>
            中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル
          </Typography>
          <Grid item container className={classes.grid}>
            <Favorite />
          </Grid>
        </CardContent>
      </CardOrigin>
    );
  }
}

export default withStyles(styles)(Card);

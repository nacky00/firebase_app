//@flow
import React, { Component, Fragment } from "react";
import {
  Card as CardOrigin,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Menu, Favorite } from "@material-ui/icons";
import DiaryImage from "./DiaryImage";

type Props = {};

const styles = {
  root: {},
  header: {
    height: "5rem",
  },
  grid: {
    paddingTop: "1rem",
  },
  media: {
    height: 200,
    width: 400,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {},
};

class Card extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    console.log(DiaryImage);

    return (
      <CardOrigin className={classes.root}>
        <CardHeader className={classes.header} title="タイトル" subheader="2019/01/13" />
        <CardContent>
          <CardMedia className={classes.media} image={require("../../images/anger.jpg")} />
          <Typography>なんだあいつ〜〜〜！キレちゃうぞ〜〜〜！</Typography>
          <Grid item container className={classes.grid}>
            <Favorite />
          </Grid>
        </CardContent>
      </CardOrigin>
    );
  }
}

export default withStyles(styles)(Card);

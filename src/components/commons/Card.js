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
import Image from "react-image-resizer";

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
  media: {
    height: 200,
    width: 200,
    paddingTop: 10,
  },
  image: {},
};

const ImageComponent = () => {
  return <Image src="../../images/water.jpg" width={240} height={240} />;
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
          <CardMedia image={image} />
          {/*<Typography>*/}
          {/*中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル中身サンプル*/}
          {/*</Typography>*/}
          <Grid item container className={classes.grid}>
            <Favorite />
          </Grid>
        </CardContent>
      </CardOrigin>
    );
  }
}

export default withStyles(styles)(Card);

//@flow
import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import Image from "react-image-resizer";

type Props = {};

const styles = {
  image: {},
};

class DiaryImage extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return <Image src={require("../../images/water.jpg")} width={300} height={300} style={classes.image} />;
  }
}
export default withStyles(styles)(DiaryImage);

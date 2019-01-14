//@flow
import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";

type Props = {
  classes: Object,
  isFavorite: boolean,
};

const styles = {
  favorite: {
    color: "pink",
  },
};

class FavoriteIcon extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, isFavorite = false } = this.props;
    return (
      <div>
        {isFavorite ? <Favorite style={{ color: "hotpink" }} /> : <FavoriteBorderOutlined style={{ color: "pink" }} />}
      </div>
    );
  }
}

export default withStyles(styles)(FavoriteIcon);

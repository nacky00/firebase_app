//@flow
import React, { Component, Fragment } from "react";
import { Paper, Typography, Toolbar, Button, Grid, TextField, withStyles } from "@material-ui/core";

type Props = {
  classes: Object,
};

const styles = {
  root: {
    height: "50vh",
  },
};

class SearchBox extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item>
          <TextField id="free-keyword" label="キーワード" type="string" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="category" label="カテゴリー" type="string" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="emotion" label="感情" type="string" variant="outlined" />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchBox);

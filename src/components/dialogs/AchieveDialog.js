//@flow
import React, { Component } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentAction,
  Button,
  Typography,
  Card,
  CardMedia,
  withStyles,
} from "@material-ui/core";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";

type Props = {
  classes: Object,
  open: boolean,
  handleClose: () => void,
};
type State = {};

const style = {
  root: {},
  card: {
    boxShadow: "none",
  },
  media: {
    height: 400,
    width: 500,
    paddingTop: 10,
  },
  message: {
    fontSize: 50,
    color: "#ff7366",
    fontWeight: 700,
  },
};

class AchieveDialog extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const { open, classes } = this.props;
    return (
      <Dialog open={open} onClose={this.handleClose} className={classes.root}>
        <DialogContent>
          <Typography className={classes.message} style={{ textAlign: "center" }}>
            Congratulations!
          </Typography>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={require("../../images/dj_party_happy.png")} />
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>とじる</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(style)(AchieveDialog);

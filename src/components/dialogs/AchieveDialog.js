//@flow
import React, { Components } from "react";
import { Dialog, withStyles } from "@material-ui/core";

type Props = {};
type State = {};

const style = {
  root: {},
};

class AchieveDialog extends Components<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    return <span>test</span>;
  }
}

export default withStyles(style)(AchieveDialog);

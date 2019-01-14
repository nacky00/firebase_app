//@flow
import React, { Component, Fragment } from "react";
import {
    withStyles
} from "@material-ui/core";
import Image from "react-image-resizer";

type Props = {};

const styles = () => {

};

class DiaryImage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <span>test</span>
        )
    }
}
extends default withStyles(styles)(DiaryImage);
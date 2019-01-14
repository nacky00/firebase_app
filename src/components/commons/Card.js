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
  Divider,
  IconButton,
  withStyles,
} from "@material-ui/core";
import { Menu, Favorite } from "@material-ui/icons";
import DiaryImage from "./DiaryImage";
import FavoriteIcon from "./FavoriteIcon";

type Props = {
  name: ?string,
  emotion: string,
};

type State = {
  isClicked: boolean,
};

const styles = {
  root: {
    width: 435,
  },
  date: {
    paddingRight: "1rem",
    paddingBottom: "1rem",
  },
  header: {
    height: "5rem",
    paddingBottom: 0,
    marginBottom: "-1rem",
  },
  divider: {
    marginRight: "1rem",
    marginLeft: "1rem",
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

class Card extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ isClicked: this.state.isClicked ? false : true });
  };

  render() {
    const { classes, name, emotion = "happy" } = this.props;
    const { isClicked } = this.state;
    const title = () => {
      let customTitle;
      switch (emotion) {
        case "angry":
          customTitle = "ぷんぷん！";
          break;
        case "sad":
          customTitle = "ううん、、、";
          break;
        case "happy":
          customTitle = "やった！";
          break;
        default:
          customTitle = "no title";
      }
      return customTitle;
    };
    const today = new Date().toString();
    const getToday = () => {
      const dt = new Date();
      const y = dt.getFullYear();
      const m = ("00" + (dt.getMonth() + 1)).slice(-2);
      const d = ("00" + dt.getDate()).slice(-2);
      const result = y + "/" + m + "/" + d;
      return result;
    };

    return (
      <CardOrigin className={classes.root}>
        <CardHeader className={classes.header} title={title()} subheader={name ? name : "名無し"} />
        <Typography className={classes.date} style={{ textAlign: "right", color: "#808080" }}>
          {getToday()}
        </Typography>
        <Divider className={classes.divider} />
        <CardContent>
          <CardMedia className={classes.media} image={require(`../../images/${emotion}.jpg`)} />
          <Typography>
            {emotion === "angry" &&
              "も〜怒っちゃった！激おこぷんぷんまる！なんなのあいつ！こんなにおとなしい私が怒らせるなんて、逆に尊敬しちゃうわ！"}
          </Typography>
          <Typography>
            {emotion === "sad" &&
              "今日はなんだか悲しいことが続いちゃった気がするわ。神様のいたずらかしら。でも大丈夫、明日はその分いいことがあるわ♪"}
          </Typography>
          <Typography>
            {emotion === "happy" && "この世に生まれてヨカッタ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜！俺最強説！！！！！！！"}
          </Typography>
          <Grid item container className={classes.grid}>
            <IconButton onClick={this.handleButtonClick}>
              <FavoriteIcon isFavorite={isClicked} />
            </IconButton>
          </Grid>
        </CardContent>
      </CardOrigin>
    );
  }
}

export default withStyles(styles)(Card);

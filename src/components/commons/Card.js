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
  header: {
    height: "5rem",
    paddingBottom: "1rem",
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
    const selectedEmotion = emotion ? emotion : "baby";

    return (
      <CardOrigin className={classes.root}>
        <CardHeader className={classes.header} title="タイトル" subheader={name ? name : "名無し"} />
        <Divider className={classes.divider} />
        <CardContent>
          <CardMedia className={classes.media} image={require(`../../images/${selectedEmotion}.jpg`)} />
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

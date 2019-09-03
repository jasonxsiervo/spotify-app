import React from "react";
import './App.css';

class MusicPlayer extends React.Component {
  // componentWillMount() {
  //   const file = require('./baseline_play_circle_outline_black_18dp.png');
  //   console.log(file);
  // }

  // const audio1 = require('./baseline_play_circle_outline_black_18dp.png');

  render() {
    return (
      <div className="MusicPlayer">
        <div className="track-info">
          <p className="player-title">{this.props.currentMusic.title}</p>
          <p className="player-artist">{this.props.currentMusic.artist}</p>
        </div>

        <div className="track-controls">
          <center>
            <button className="previousButton"></button>
            <button onClick={() => this.setState({ player: "playing" })} className="playButton"></button>
            <button className="nextButton"></button>
          </center>
        </div>

        <div className="track-volume">
        <p>{this.props.currentMusic.duration}</p>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;



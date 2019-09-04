import React from "react";
import './App.css';

class MusicPlayer extends React.Component {
  
  icon = event => {
    event.preventDefault();
    if(this.props.currentMusic.play) {
      console.log('migraine');
    }

  };

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
            <button onClick={this.playPause} className="playButton" src={this.icon}></button>
            <button className="nextButton"></button>
          </center>
        </div>

        <div className="track-volume">
        {/* <p>{this.props.currentMusic.duration}</p> */}
        </div>
      </div>
    );
  }
}

export default MusicPlayer;



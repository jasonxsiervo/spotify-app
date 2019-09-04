import React from "react";
import './App.css';
import playButton from './baseline_play_circle_outline_black_18dp.png';
import pauseButton from './baseline_pause_circle_outline_black_18dp.png';

class MusicPlayer extends React.Component {
  titleRef = React.createRef();
  artistRef = React.createRef();
  durationRef = React.createRef();

  play = event => {
      const songs = {
          title: this.props.songDetail.title,
          artist: this.props.songDetail.artist,
          duration: this.props.songDetail.duration,
          filePath: this.props.songDetail.filePath
      }
      this.props.play(event, songs);
  }

  pause = (event) => {
      const songs = {
          title: this.props.songDetail.title,
          artist: this.props.songDetail.artist,
          duration: this.props.songDetail.duration,
          filePath: this.props.songDetail.filePath
      }
      this.props.pause(event, songs);
  }

  render() {

    // const { title, artist, duration, filePath, play } = this.props.details;

    return (
      <div className="MusicPlayer">
        <div className="track-info">
          <p className="player-title">{this.props.songDetail.title}</p>
          <p className="player-artist">{this.props.songDetail.artist}</p>
        </div>

        <div className="track-controls">
          <center>

            <button className="previousButton"></button>

            <form className="play-pause" onSubmit={ !this.props.isPlaying ? this.play : this.pause }>

                <input name="title" ref={this.titleRef} required type="hidden" defaultValue={this.props.songDetail.title}/>
                <input name="artist" ref={this.artistRef} required type="hidden" defaultValue={this.props.songDetail.artist} />
                <input name="duration" ref={this.durationRef} required type="hidden" defaultValue={this.props.songDetail.duration} />

                <button className="playFirst" type="submit">
                <img src={this.props.isPlaying? pauseButton : playButton} />
                </button>
            
            </form>  

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



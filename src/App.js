import React from 'react';
import './App.css';
import MusicList from './MusicList';
import MusicPlayer from './MusicPlayer';
import sampleSongs from "./sample-music";
import Music from './Music';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {},
      songs: {},
      play: false,
      playing: {},
      audio: {},
      button: 'play',
      songDetail: {},
      isPlaying: false
    };    
    this.play = this.play.bind(this);    
  }


  pause = async (event, songs) => {
    event.preventDefault();
    this.state.audio.pause();
    
    if(this.state.songDetail.title !== songs.title) {
      // pass to this.app to process new song
      this.play(event, songs);
    }

    await this.setState({ isPlaying: false });
  }

  play = async (event, songs) => {
    event.preventDefault();
    
    // if there is a song already being played
    if(this.state.songDetail.title) {
      //load new song if song title is different from the previous song
      if(this.state.songDetail.title !== songs.title) {
        this.setState({audio: {}});
        let audio = new Audio(require(`./songs/${songs.title}.mp3`));
        await this.setState({audio});
      } 
    }

    // load a new song if there is no song being played
    if(this.state.audio && !this.state.audio.paused) {
      let audio = new Audio(require(`./songs/${songs.title}.mp3`));
      await this.setState({audio});
    }

    // otherwise, play normally
    await this.setState({songDetail: songs});
    this.state.audio.play();
    await this.setState({ isPlaying: true });
      
  }

  loadSampleSongs = async () => {
    await this.setState({ songs: sampleSongs });
  };


  render() {

    return (
      <div className="Apps">

        <header className="App-header">
        </header>

        <div className="left-part">

        </div>

        <div className="list-part">
          <MusicList loadSampleSongs={this.loadSampleSongs} />

          <div className = "table-music">

              <div className="tracks__heading">

              <div className="tracks__heading__playPause">

                <i className="ion-ios-stopwatch-outline"></i>

              </div>

              <div className="tracks__heading__title">Song</div>

              <div className="tracks__heading__artist">Artist</div>

              <div className="tracks__heading__duration">duration</div>

              </div>

              {Object.keys(this.state.songs).map(key =>
                <Music key={key} details={this.state.songs[key]} play={this.play} pause={this.pause} button={this.state.button} 
                isPlaying={this.state.isPlaying}  songDetail={this.state.songDetail}/>)}

          </div>

        </div>

        <div className="right-part">
        </div>

        <div className="music-player">

          <MusicPlayer play={this.play} pause={this.pause} songDetail={this.state.songDetail} 
            isPlaying={this.state.isPlaying} />
          
        </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import MusicList from './MusicList';
import MusicPlayer from './MusicPlayer';
import sampleSongs from "./sample-music";
import Music from './Music';

import song0 from './songs/Figure Me Out.mp3';
import song1 from './songs/Im Not Afraid of Anything.mp3';
import song2 from './songs/Piano Church.mp3';
import song3 from './songs/Waltz of Four Left Feet.mp3';
import song4 from './songs/Where Im At.mp3';
import song5 from './songs/You Make My Dreams.mp3';


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
    };    
    this.play = this.play.bind(this);    
  }

  play = async (songs) => {

    // load the song here using await
    const playing = { ...this.state.playing };
    playing[`music${Date.now()}`] = songs;
    await this.setState({ playing: songs });
    console.log(this.state.play);

    // use audio.play()
    if(this.state.play === false){

      // determine which song is selected
      if(this.state.playing.title === "Figure Me Out"){
        this.url = song0;
      } else if(this.state.playing.title === "Im Not Afraid of Anything") {
        this.url = song1;
      } else if(this.state.playing.title === "Piano Church") {
        this.url = song2;
      } else if(this.state.playing.title === "Waltz of Four Left Feet") {
        this.url = song3;
      } else if(this.state.playing.title === "Where Im At") {
        this.url = song4;
      } else if(this.state.playing.title === "You Make My Dreams") {
        this.url = song5;
      } else {
        this.url = song0;
      }
      let audio = new Audio(this.url);
      this.setState({audio});

      // play the selected song
      this.setState({
          play: true,
        });
      this.state.audio.play();

    } else if(this.state.play && this.state.playing) {   // if the play: true AND playing has a value...
      this.state.audio.pause();   // pause the 

      if(this.state.playing.title === "Figure Me Out"){
        this.url = song0;
      } else if(this.state.playing.title === "Im Not Afraid of Anything") {
        this.url = song1;
      } else if(this.state.playing.title === "Piano Church") {
        this.url = song2;
      } else if(this.state.playing.title === "Waltz of Four Left Feet") {
        this.url = song3;
      } else if(this.state.playing.title === "Where Im At") {
        this.url = song4;
      } else if(this.state.playing.title === "You Make My Dreams") {
        this.url = song5;
      } else {
        this.url = song0;
      }
      let audio = new Audio(this.url);
      this.setState({audio});

      this.setState({
          play: true,
        });
      this.state.audio.play();
      console.log('second');
      console.log(this.state.play);

    } else {
        this.setState({ 
          play: false 
        });
        this.state.audio.pause();
    }
    
  }

  loadSampleSongs = async () => {
    await this.setState({ songs: sampleSongs });
    this.setState( {} )
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
                <Music key={key} details={this.state.songs[key]} play={this.play} button={this.state.button}/>)}

          </div>

        </div>

        <div className="right-part">
        </div>

        <div className="music-player">

          <MusicPlayer currentMusic={this.state.playing}/>
          
        </div>

      </div>
    );
  }
}

export default App;

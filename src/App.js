import React, { Component } from 'react';
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
      play: false,
      title: {},
      songs: {},
      playing: {}
    };    
    this.play = this.play.bind(this);    
  }

  play = async (songs) => {

    // load the song here using await
    const playing = { ...this.state.playing };
    playing[`music${Date.now()}`] = songs;
    await this.setState({ playing: songs });

    console.log(this.state.playing);

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
      this.audio = new Audio(this.url);

      // play the selected song
      this.setState({
          play: true,
        });
      this.audio.play();

    }  else if(this.state.play === true && this.state.playing) {   // if the play: true AND playing has a value...
      this.audio.pause();   // pause the 

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
      this.audio = new Audio(this.url);

      this.setState({
          play: true,
        });
      this.audio.play();

    } else {
        this.setState({ 
          play: false 
        });
        this.audio.pause();
    }
  }

  // playMusic = async (songs) => {

  //   // Set the selected music to state: playing {}
  //   const playing = { ...this.state.playing };
  //   playing[`music${Date.now()}`] = songs;
  //   await this.setState({ playing: songs });
  //   //console.log(this.state.playing);

  //   //select the music to play
  //   const fileLocation = `.${this.state.playing.filePath}`;
  //   // const filepath = require(`${fileLocation}`);
  //   await this.setState({ filepath: fileLocation });

  //   // //update state player
  //   //await this.setState({ player: "playing" });
  //   //console.log(this.audio);
  //   //console.log(this.refs);
  //   // this.refs.player.play();
  //   //await this.player.play();

  //   // console.log(this.document.getElementById('audioHTML'));
  // };

  // loadSampleMusic = music => {
  //   const songs = {...this.state.music};
  //   songs[`music${Date.now()}`] = music;
  //   this.setState({ sampleMusic });
  // };


  loadSampleSongs = async () => {
    await this.setState({ songs: sampleSongs });
    this.setState( {} )
    // console.log(this.state);
    // this.setState({ playing: sampleSongs });
    // console.log(this.state.songs);
  };

  

  // togglePlay = async () => {
  //   let kanta = new Audio(this.state.filepath);
  //   // kanta.controls = true;
  //   console.log(kanta);
  //   let toggle = !this.state.play;
  //   await this.setState({ play: true });
  //   // await this.setState({audioTag: kanta });
  //   console.log(this.state.audioTag);
  //   // await kanta.play();
    
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   //console.log(this.ref);
  //   if(this.state.playing !== prevState.playing) {
  //     let path;
  //     switch (this.state.playing) {
  //       case "Figure Me Out":
  //         path =  this.state.filepath
  //       break;
  //       case "Im Not Afraid of Anything":
  //         path =  this.state.filepath
  //       break;
  //       default:
  //       break;
  //     }

  //     if(path) {
  //       this.player.src = path;
  //       this.player.play()
  //       //this.setState({player: "playing"})
  //     }

  //     if (this.state.player === "paused") {
  //       this.player.pause();
  //     } else if (this.state.player === "stopped") {
  //       this.player.pause();
  //       this.player.currentTime = 0;
  //       this.setState({ selectedTrack: null });
  //     } else if (
  //       this.state.player === "playing" &&
  //       prevState.player === "paused"
  //     ) {
  //       this.player.play();
  //     }
  //   }
  // }

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
                <Music key={key} details={this.state.songs[key]} play={this.play} />)}

          </div>

        </div>

        <div className="right-part">
        </div>

        <div className="music-player">

          <button onClick={this.play}> {this.state.play ? 'Pause' : 'Play'} </button>

          <MusicPlayer currentMusic={this.state.playing} player={this.state.player}/>
          
        </div>

      </div>
    );
  }
}

export default App;

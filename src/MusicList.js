import React from 'react';
import './App.css';

class MusicList extends React.Component {
  // titleRef =  React.createRef();
  // artistRef  = React.createRef();;
  // durationRef = React.createRef();
  render() {
    return (
      <div className="Music-List">
        <center>
          <button className="btn show-list" onClick={this.props.loadSampleSongs}>
            Load all Songs
          </button>
        </center>
        
      </div>
    );
  }
}

export default MusicList;

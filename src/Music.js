import React from 'react';
import './App.css';
// import PropTypes from "prop-types";

class Music extends React.Component {
    titleRef = React.createRef();
    artistRef = React.createRef();
    durationRef = React.createRef();

    play = event => {
        event.preventDefault();
        const songs = {
            play: true,
            title: this.props.details.title,
            artist: this.props.details.artist,
            duration: this.props.details.duration,
            filePath: this.props.details.filePath
        }
        this.props.play(songs);
    }

    render() {
        const { title, artist, duration, filePath,  songNumber, play } = this.props.details;

        return (
            <div className="single-music" key="key">
                <div className="play-pause">
                    <form className="play-pause" onSubmit={this.play}>
                        <input name="play" ref={this.playRef} required type="hidden" defaultValue={play}/>
                        <input name="title" ref={this.titleRef} required type="hidden" defaultValue={title}/>
                        <input name="artist" ref={this.artistRef} required type="hidden" defaultValue={artist}/>
                        <input name="duration" ref={this.durationRef} required type="hidden" defaultValue={duration}/>
                        <input name="duration" ref={this.pathRef} required type="hidden" defaultValue={filePath}/>

                        <button className="playFirst" type="submit">Play</button>
                    </form>      
                </div>
                <div className="title">
                    <p> {title} </p>
                </div>
                <div className="artist">
                    <p> {artist} </p>
                </div>
                <div className="duration">
                    <p> {duration} </p>
                </div>
            </div>
          );
    }
}

export default Music;

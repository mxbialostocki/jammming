import React from 'react';
import ReactDOM from 'react-dom';
import './Playlist.css'
import TrackList from '../TrackList/TrackList';
import App from '../App/App';


class Playlist extends React.Component {
  constructor(props) {
    super(props);
//bindings
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
     return (
       <div className="Playlist">
         <input playlistName={this.props.playlistName} onChange={this.handleNameChange}/>
         <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
         <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
       </div>
     );
  }
}

export default Playlist;

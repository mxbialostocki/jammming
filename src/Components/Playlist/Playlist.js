import React from 'react';
import ReactDOM from 'react-dom';
import 'Playlist.css'
import TrackList from './TrackList/TrackList';
import App from './App/App';


class Playlist extends React.Component {
   render() {
     return (
       <div className="Playlist">
         <input playlistName={this.props.playlistName}/>
         <TrackList tracks={this.props.playlistTracks}
//         <!-- Add a TrackList component -->
         <a className="Playlist-save">SAVE TO SPOTIFY</a>
       </div>
     );
   }
}

export default Playlist;

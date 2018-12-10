import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [],
      filteredResults: []
    };
// bindings
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }
  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks;
    let npt = newPlaylistTracks.indexOf(track);
    if (npt >- 1) {
      newPlaylistTracks.splice(npt, 1);
    }
    this.setState({playlistTracks: newPlaylistTracks});
  }
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }
  savePlaylist(playlistName) {
    //get uris from current playlist
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    // generate and save playlist to SPOTIFY
    Spotify.saveplaylist(this.state.playlistName, trackURIs);
    //playlist reset
    this.setState({playlistTracks: [], playlistName: 'New Playlist'});
// let newFilteredResults = this.state.searchResults;
// this.setState({filteredResults: newFilteredResults});
  }
  search(term) {
    console.log(term);
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.state.search}/>
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack}/>
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.state.removeTrack} onNameChange={this.state.updatePlaylistName} onSave={this.state.savePlaylist}/>
            </div>
          </div>
      </div>
    );
  }
}
export default App;

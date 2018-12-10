import React from 'react';
import ReactDOM from 'react-dom';
import Track from '../Track/Track';
import './TrackList.css';
import SearchResults from '../SearchResults/SearchResults';
import App from '../App/App';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {
            this.props.tracks.map(track =>{
              return <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
            })
          }
      </div>
    );
  };
}

export default TrackList;

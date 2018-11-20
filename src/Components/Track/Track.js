import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
  addTrack(track) {
    this.props.onAdd(this.props.track)
    }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">
          {this.renderAction({ isRemoval ? '-' : '+' })};
        </a>
      </div>
    );
  }
}

export default Track;

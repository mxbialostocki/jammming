import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
//bindings
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

  addTrack(track) {
    this.props.onAdd(this.props.track)
  }
  renderAction() {
    return(this.props.isRemoval?
      <a className="Track-action" onClick={this.removeTrack}>-</a> : <a className="Track-action" onClick={this.addTrack}>+</a>
    );
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
      </div>
    );
  }
}

export default Track;

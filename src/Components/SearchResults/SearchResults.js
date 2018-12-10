import React from 'react';
import REACTDOM from 'react-dom';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css'
import App from '../App/App'

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
      </div>
    )
  }
}

export default SearchResults;

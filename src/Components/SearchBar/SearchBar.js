import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super(props);
    this.state = {term: ''}
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  search() {
    if (this.state.term !='') {
      this.props.onSearch(this.state.term)
    }
  }
  handleTermChange(event) {
    this.setState = ({term: event.target.value});
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;

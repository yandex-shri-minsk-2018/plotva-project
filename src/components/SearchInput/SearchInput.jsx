import React, {Component} from 'react';
import './SearchInput.css';

export class SearchInput extends Component {
  render() {
    return (
      <input className="search" type="search" placeholder="Search for contacts or usernames"/>
    );
  }
}
import React from 'react';
import { connect } from 'react-redux';
import './SearchInput.css';

const stateToProps = state => ({
  current: state.search.user,
});

export const SearchInput = connect(stateToProps)(
  class SearchInput extends React.Component {
    constructor(props) {
      super(props);

      this.getSearchRequest = this.getSearchRequest.bind(this);
    }

    getSearchRequest(event) {
      const value = event.target.value;
      return this.props.dispatch({
        type: 'SET_SEARCH',
        letters: value,
      });
    }

    render() {
      return (
        <input
          className="search"
          type="search"
          placeholder="Search for contacts or usernames"
          onChange={this.getSearchRequest}
        />
      );
    }
  },
);

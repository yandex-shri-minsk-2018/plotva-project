import React from 'react';
import { connect } from 'react-redux';
import './ChatInput.css';
import { setChatName } from '../../store/actions/chatActions';

const stateToProps = state => ({
  current: state.search.user,
});

export const ChatInput = connect(stateToProps)(
  class ChatInput extends React.Component {
    constructor(props) {
      super(props);

      this.getSearchRequest = this.getNewChatName.bind(this);
    }

    getNewChatName(event) {
      const value = event.target.value;
      return this.props.dispatch(setChatName(value));
    }

    render() {
      return (
        <input
          className="search"
          type="search"
          placeholder="Enter new qnique chat name."
          onChange={this.getNewChatName}
        />
      );
    }
  },
);

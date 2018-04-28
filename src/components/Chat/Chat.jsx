import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InfiniteScroller } from '../InfiniteScroller/InfiniteScroller';
import { MessagesList } from '../MessagesList/MessagesList';
import { fetchMessages } from '../../store/actions/messagesActions';
import { fetchChat, clearChat } from '../../store/actions/chatActions';
import api from '../../api';

class ChatComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      error: null,
    };
    this.fetchNext = this.fetchNext.bind(this);
  }

  componentDidMount() {
    this.joinRoom();
    this.fetchNext();
    this.props.fetchChat(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.leaveRoom();
    this.props.clearChat();
  }

  async joinRoom() {
    try {
      await api.currentUserJoinRoom(this.props.match.params.id);
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  async leaveRoom() {
    try {
      await api.leaveRoom();
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  async fetchNext() {
    try {
      await this.props.fetchMessages(this.props.match.params.id);
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const { messages, match } = this.props;
    return (
      <InfiniteScroller loadMore={this.fetchNext}>
        {messages[match.params.id] ? <MessagesList messages={messages[match.params.id].messages} /> : null}
      </InfiniteScroller>
    );
  }
}

const stateToProps = state => ({
  user: state.user,
  messages: state.messages,
});

export const Chat = withRouter(connect(stateToProps, { fetchMessages, fetchChat, clearChat })(ChatComponent));

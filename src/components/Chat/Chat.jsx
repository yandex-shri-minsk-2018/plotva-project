import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InfiniteScroller } from '../InfiniteScroller/InfiniteScroller';
import { MessagesList } from '../MessagesList/MessagesList';
import api from '../../api';


class ChatComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      messages: [],
      next: null,
      error: null,
    };
    this.fetchNext = this.fetchNext.bind(this);
  }

  async componentDidMount() {
    this.fetchNext(true);
  }

  async fetchNext(next = this.state.next) {
    try {
      if (next) {
        const response = await api.getRoomMessages(this.props.match.params.id);
        const messages = response.items.map(message => ({
          text: message.message,
          time: message.created_at,
          isMy: this.props.user._id === message.userId,
        }));
        this.setState({
          messages,
          next: response.next,
        })
        return response;
      }
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  render() {
    return (
      <InfiniteScroller loadMore={this.fetchNext}>
        <MessagesList messages={this.state.messages} />
      </InfiniteScroller>
    );
  }
}

const stateToProps = (state) => ({
  user: state.user,
});

export const Chat = withRouter(connect(stateToProps)(ChatComponent));

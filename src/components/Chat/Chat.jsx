import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { InfiniteScroller } from '../InfiniteScroller/InfiniteScroller';
import { MessagesList } from '../MessagesList/MessagesList';
import { fetchMessages } from '../../store/actions/messagesActions';

class ChatComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      error: null,
    };
    this.fetchNext = this.fetchNext.bind(this);
  }

  componentDidMount() {
    this.fetchNext();
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
        {messages[match.params.id] && <MessagesList messages={messages[match.params.id].messages} />}
      </InfiniteScroller>
    );
  }
}

const stateToProps = state => ({
  user: state.user,
  messages: state.messages,
});

export const Chat = withRouter(connect(stateToProps, { fetchMessages })(ChatComponent));

import React, { PureComponent } from 'react';
import faker from 'faker';
import { Contacts } from '../Contacts/Contacts';
import { InfiniteScroller } from '../InfiniteScroller/InfiniteScroller';
import api from '../../api';

export class ChatsPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      rooms: [],
      next: null,
    };
    this.fetchNext = this.fetchNext.bind(this);
  }

  async componentDidMount() {
    const response = await this.fetchRooms();
    this.setState(response);
  }

  async fetchNext() {
    if (this.state.next) {
      const response = await this.fetchRooms(this.state.next);
      this.setState(prevState => {
        return {
          rooms: [...prevState.rooms, ...response.rooms],
          next: response.next,
        };
      });
    }
  }

  async fetchRooms(next) {
    const res = await api.getCurrentUserRooms(next || { limit: 2 });
    const rooms = await Promise.all(res.items.map(async (room) => {
      const messages = await this.fetchMessage(room._id);
      return {
        _id: room._id,
        userName: room.name,
        content: (messages.items[0] && messages.items[0].message) || 'No messages',
      };
    }));
    return {
      rooms,
      next: res.next,
    };
  }

  async fetchMessage(roomId) {
    const messages = await api.getRoomMessages(roomId);
    console.log(messages);
    return messages;
  }

  render() {
    return (
      <InfiniteScroller loadMore={this.fetchNext}>
        <Contacts contacts={this.state.rooms} />
      </InfiniteScroller>
    );
  }
}

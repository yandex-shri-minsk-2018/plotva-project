import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import { MenuAction } from '../MenuAction/MenuAction';
import api from '../../../src/api.js';

export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUsers: [],
      error: null,
    };
    this.onSelectUser = this.onSelectUser.bind(this);
    this.onAddUsers = this.onAddUsers.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch(param) {
    if (param === null) {
      return;
    }

    try {
      let resp = await api.getUsers(param),
        next = resp.next;
      this.setState(prevState => ({
        users: prevState.users.concat(
          resp.items.map(user => {
            const status = user.online ? 'online' : 'offline';
            return {
              id: user._id,
              userName: user.name ? user.name : 'Anonymous',
              size: 'small',
              content: status,
              contentType: status,
            };
          }),
        ),
      }));
      await this.fetch(next);
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  }

  onAddUsers(event) {
    console.log(this.state.selectedUsers);
  }

  onSelectUser(userId) {
    const user = this.state.users.find(user => user.id === userId);
    if (user) {
      user.checked = true;
      this.setState(prevState => ({
        selectedUsers: [...prevState.selectedUsers, userId],
      }));
    }
  }

  render() {
    const { error, users } = this.state;
    return (
      <React.Fragment>
        <MenuAction type="header-add" text="Add users to a chat" onClick={this.onClick} />
        {error ? <p>{error.message}</p> : <Contacts onClick={this.onSelectUser} type="contactList" contacts={users} />}
      </React.Fragment>
    );
  }
}

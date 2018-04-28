import React, { PureComponent } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Contact } from '../Contact/Contact';

import { connect } from 'react-redux';

import api from '../../../src/api.js';

class UserListComponent extends PureComponent {
  componentDidMount() {
    this.fetch();
  }

  state = {
    users: [],
    error: null,
  };

  async fetch(param) {
    if (param === null) {
      return;
    }

    try {
      let resp = await api.getUsers(param);
      let next = resp.next;
      this.setState(prevState => ({
        users: prevState.users.concat(
          resp.items.map(user => {
            const status = user.online ? 'online' : 'offline';
            return {
              _id: user._id,
              userName: user.name ? user.name : 'Anonymous',
              avatar: user.img,
              size: 'small',
              content: status,
              contentType: status,
            };
          }),
        ),
      }));
      await this.fetch(next);
    } catch (err) {
      console.error(err);
      this.setState({ error: err });
    }
  }

  render() {
    const { users, error } = this.state;
    const { user, createChat, current } = this.props;
    return (
      <React.Fragment>
        {
          createChat
          ? false
          : (
            <Contact
              userName={user.name}
              content={user.phone}
              avatar={user.img}
              size="large"
              contentType="message"
              color="7"
            />
          )
          
        }
        
        {error ? <p>{error.message}</p> : <Contacts type="contactList" contacts={users} search={current} />}
      </React.Fragment>
    );
  }
}

const stateToProps = state => ({
  user: state.user,
  current: state.search.currentUserSearch,
});

export const UserList = connect(stateToProps)(UserListComponent);

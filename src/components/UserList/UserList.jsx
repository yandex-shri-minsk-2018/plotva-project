import React, { PureComponent } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Contact } from "../Contact/Contact";

import { connect } from 'react-redux';

import api from '../../../src/api.js'

export const UserListComponent = connect(stateToProps) ( 
class UserListComponent extends PureComponent {
  state = {
    users: [],
    error: null
  };

  async fetch(param) {

    if (param === null) {
      return;
    }

    try {
      let resp = await api.getUsers(param),
        next = resp.next;
      this.setState((prevState) => ({
        users: prevState.users.concat(resp.items.map((user) => {
          const status = user.online ? 'online' : 'offline';
          return {
            userName: user.name ? user.name : 'Anonymous',
            size: 'small',
            content: status,
            contentType: status
          }
        }))
      }));
      await this.fetch(next);
    } catch(err) {
      console.error(err);
      this.setState({error: err});
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { users, error } = this.state;
    return (
      <React.Fragment>
        <Contact
          userName={this.props.user.name}
          content={this.props.user.phone}
          size="large"
          contentType="message"
          color="7"
        />
        {error ? <p>{error.message}</p> : <Contacts type="contactList" contacts={users} search={this.props.current}/>}
      </React.Fragment>
    );
  }
})

const stateToProps = (state) => ({
  user: state.user,
  current: state.search.currentUserSearch
});

export const UserList = connect(stateToProps)(UserListComponent);

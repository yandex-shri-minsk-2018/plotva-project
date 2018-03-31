import React, {Component} from 'react';
import { Contacts } from '../Contacts/Contacts';
import api from '../../../src/api.js'

export class UserList extends Component {
  state = {
      users: []

    };


  async fetch(param) {

    if (param === null) {
      return;
    }

    try {
      let resp = await api.getUsers(param);
      this.next = resp.next;
      this.setState({
        users: this.state.users.concat(resp.items.map((user) => {
          const status = user.online ? 'online' : 'offline';
          return {
            userName: user.name ? user.name : 'Anonymous',
            size: 'small',
            content: status,
            contentType: status
          }
        }))
      });
      await this.fetch(this.next);
    } catch(err) {
      console.error(err);
      this.setState({error: err});
    }
  }

  componentDidMount() {
    this.fetch();
    api.getCurrentUser()
      .then((data) => this.setState({currentUser: data}))
      .catch((err) => {
          console.error(err);
          this.setState({error: err});
      })
  }

  render() {
    return <Contacts type="contactList" contacts={this.state.users}/>;
  }
}

import React, {Component} from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Contact } from "../Contact/Contact";
import api from '../../../src/api.js'

export class UserList extends Component {
  state = {
      users: [],
      currentUser: {},
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
    api.getCurrentUser()
      .then((data) => this.setState({currentUser: data}))
      .catch((err) => {
          console.error(err);
          this.setState({error: err});
      })
  }

  render() {
    const { currentUser, users, error } = this.state;
    return (
      <React.Fragment>
        <Contact
          userName={currentUser.name}
          content={currentUser.phone}
          size="large"
          contentType="message"
        />
        {error ? <p>{error.message}</p> : <Contacts type="contactList" contacts={users}/>}
      </React.Fragment>
    );
  }
}

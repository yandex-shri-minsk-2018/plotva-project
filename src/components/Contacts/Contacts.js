import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Contact } from '../Contact/Contact';
import { MenuAction } from '../MenuAction/MenuAction';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import './Contacts.css';
import addUserIcon from './images/add-user.svg';

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/chat">
          <Contact
            userName="Lena Cohen"
            content="+65 8586 3216"
            size="large"
            contentType="messege"
          />
        </Link>
        <SectionTitle title="Contacts" />
        <MenuAction text="Invite Friends" icon={addUserIcon} />
        <div className="contacts">
          {this.props.contacts.map((contact, index) => (
            <Link to={`/chat/${contact._id}`}><Contact key={index} {...contact} /></Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

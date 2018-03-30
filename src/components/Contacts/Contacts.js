import React, { Component } from 'react';
import { Contact } from '../Contact/Contact';
import { MenuAction } from '../MenuAction/MenuAction';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import './Contacts.css';
import addUserIcon from './images/add-user.svg';

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <Contact
          userName="Lena Cohen"
          content="+65 8586 3216"
          size="large"
          contentType="messege"
        />
        <SectionTitle title="Contacts" />
        <MenuAction text="Invite Friends" icon={addUserIcon} />
        <div className="contacts">
          {this.props.contacts.map((contact, index) => (
            <Contact key={index} {...contact} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

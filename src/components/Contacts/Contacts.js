import React, { Component } from 'react';
import { Contact } from '../Contact/Contact';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import './Contacts.css';

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
          <Contact
            userName="Lena Cohen"
            content="+65 8586 3216"
            size="large"
            contentType="message"
            link="/chat"
          />
        <SectionTitle title="Contacts" />
        <div className="contacts">
          {this.props.contacts.map((contact, index) => (
            <Contact key={index} link={`/chat/${contact._id}`} {...contact} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

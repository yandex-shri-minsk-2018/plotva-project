import React, { Component } from 'react';
import { Contact } from '../Contact/Contact';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import './Contacts.css';

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle title="Contacts" />
        <div className="contacts">
          {this.props.contacts.map((contact, index) => {
            if (contact.userName.toLowerCase().indexOf(this.props.search) + 1 > 0)
              return <Contact key={index} color={`${index}`} link={`/chat/${contact._id}`} {...contact} />;

            return null;
          })}
        </div>
      </React.Fragment>
    );
  }
}

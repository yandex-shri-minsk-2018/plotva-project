import React, { Component } from 'react';
import { Contact } from '../Contact/Contact';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom'

import './Contacts.css';

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/chat" >
          <Contact
            userName="Lena Cohen"
            content="+65 8586 3216"
            size="large"
            contentType="messege"
            link="/dialog"
          />
        </Link>
        <SectionTitle title="Contacts" />
        <div className="contacts">
          {this.props.contacts.map((contact, index) => (
            <Link to={`/chat/${contact._id}`}><Contact key={index} {...contact} /></Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

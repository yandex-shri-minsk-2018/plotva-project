import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Contact } from '../Contact/Contact';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import './Contacts.css';
import addUserIcon from './images/add-user.svg';

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle title="Contacts" />
        <div className="contacts">
          {this.props.contacts.map((contact, index) => (
            <Link key={index} to="/dialog"><Contact {...contact} /></Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

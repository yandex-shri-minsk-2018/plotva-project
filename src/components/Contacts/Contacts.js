import React, { Component } from 'react';
import './Contacts.css';
import {Contact} from '../Contact/Contact'
export class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        {
          this.props.contacts.map((contact, index) =>
            <Contact
              key = {index}
              userName = {contact.userName}
              content = {contact.content}
              contentType = {contact.contentType}
              time = {contact.time}
              size = {contact.size}
              icon = {contact.icon}
            />
          )
        }
      </div>
    );
  }
}

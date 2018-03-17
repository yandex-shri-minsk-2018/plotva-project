import React, { Component } from 'react';
import './Contacts.css';
import {Contact} from '../Contact/Contact'
export class Contacts extends Component {
  render() {
    return (
      <div className='contacts'>
        {
          this.props.contacts.map((contact, index) =>
            <Contact
              key = {index}
              {...contact}
            />
          )
        }
      </div>
    );
  }
}

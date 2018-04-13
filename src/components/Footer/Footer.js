import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FooterBtn from '../FooterBtn/FooterBtn.js';
import './Footer.css';

const chats = 'Chats',
      contacts = 'Contacts';

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Link to="/chats">
          <FooterBtn 
            icon='footer-chats' 
            description={chats}
            active={this.props.path === chats? true : false}
          />
        </Link>
        <Link to="/contacts">
          <FooterBtn 
            icon='footer-contacts' 
            description={contacts}
            active={this.props.path === contacts? true : false}
          />
        </Link>
      </div>
    );
  }
}

export default Footer;

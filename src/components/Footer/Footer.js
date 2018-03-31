import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ChatsIcon from './chats.svg';
import ContactsIcon from './contacts.svg';
import SettingsIcon from './settings.svg';
import FooterBtn from '../FooterBtn/FooterBtn.js';
import './Footer.css';


export class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <Link to="/chats">
          <FooterBtn source={ChatsIcon} description='Chats'/>
        </Link>
        <Link to="/contacts">
          <FooterBtn source={ContactsIcon} description='Contacts'/>
        </Link>
        {/*<FooterBtn onClick={this.props.changeTab} source={SettingsIcon} description='Settings'/>*/}
      </div>
    );
  }
}

export default Footer;

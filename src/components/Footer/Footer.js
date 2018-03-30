import React, { Component } from 'react';
import ChatsIcon from './chats.svg';
import ContactsIcon from './contacts.svg';
import SettingsIcon from './settings.svg';
import FooterBtn from '../FooterBtn/FooterBtn.js';
import './Footer.css';


export class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <FooterBtn onClick={this.props.changeTab} source={ChatsIcon} description='Chats'/>
        <FooterBtn onClick={this.props.changeTab} source={ContactsIcon} description='Contacts'/>
        <FooterBtn onClick={this.props.changeTab} source={SettingsIcon} description='Settings'/>
      </div>
    );
  }
}

export default Footer;

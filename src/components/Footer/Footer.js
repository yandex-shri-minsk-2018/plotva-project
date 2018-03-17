import React, { Component } from 'react';
import ChatsIcon from './chats.svg';
import ContactsIcon from './contacts.svg';
import SettingsIcon from './settings.svg';
import FooterBtn from '../FooterBtn/FooterBtn.js';
import './Footer.css';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      chatsActive : 1,
      contactsActive : 0,
      settingsActive :0  
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('hi');
  }

  render() {
    return (
      <div className="footer">
        <FooterBtn onClick={this.handleClick} source={ChatsIcon} description='Chats' active={this.state.chatsActive} />
        <FooterBtn onClick={this.handleClick} source={ContactsIcon} description='Contacts' active={this.state.contactsActive} />
        <FooterBtn onClick={this.handleClick} source={SettingsIcon} description='Settings' active={this.state.settingsActive} />
      </div>
    );
  }
}

export default Footer;

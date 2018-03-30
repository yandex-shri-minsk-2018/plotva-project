import React, { Component } from 'react';
import ChatsIcon from './chats.svg';
import ContactsIcon from './contacts.svg';
import SettingsIcon from './settings.svg';
import FooterBtn from '../FooterBtn/FooterBtn.js';
import './Footer.css';

<<<<<<< HEAD
class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      chatsActive: 1,
      contactsActive: 0,
      settingsActive: 0  
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('hi');
  }
=======
export class Footer extends Component {
>>>>>>> footer for demo

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

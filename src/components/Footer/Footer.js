import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FooterBtn from '../FooterBtn/FooterBtn.js';
import './Footer.css';


export class Footer extends Component {


  render() {
    return (
      <div className="footer">
        <Link to="/chats">
          <FooterBtn icon='footer-chats' description='Chats'/>
        </Link>
        <Link to="/contacts">
          <FooterBtn icon='footer-contacts' description='Contacts'/>
        </Link>
        {/*<FooterBtn onClick={this.props.changeTab} source={SettingsIcon} description='Settings'/>*/}
      </div>
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import './FooterBtn.css';

class FooterBtn extends Component {
  render(props) {
    return (
      <div onClick={this.props.onClick} className={this.props.active?"footer-icon":"footer-icon--passive"}>
        <img src={this.props.source} className="footer-icon-logo" alt="" />
        <p className="footer-icon-description">{this.props.description}</p>
      </div>
    );
  }
}
export default FooterBtn;

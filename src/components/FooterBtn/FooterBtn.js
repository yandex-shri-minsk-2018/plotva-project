import React, { Component } from 'react';
import './FooterBtn.css';

class FooterBtn extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.active?"footer-btn":"footer-btn_passive"}>
        <img src={this.props.source} className="footer-btn__logo" alt="" />
        <p className="footer-btn__description">{this.props.description}</p>
      </div>
    );
  }
}
export default FooterBtn;

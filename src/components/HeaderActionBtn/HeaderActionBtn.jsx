import React, {Component} from 'react';
import './HeaderActionBtn.css';

export class HeaderActionBtn extends Component {
  render() {
    return <button className="header-action">{this.props.txt}</button>;
  }
}

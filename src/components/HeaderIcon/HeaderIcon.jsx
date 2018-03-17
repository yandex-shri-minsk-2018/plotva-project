import React, {Component} from 'react';
import './HeaderIcon.css';

export class HeaderIcon extends Component {
  render() {
    let {type} = this.props;

    return (
      <a href="#" className={`header-icon header-icon--${type}`}>{type}</a>
    );
  }
}


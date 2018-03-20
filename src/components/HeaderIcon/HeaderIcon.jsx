import React, {Component} from 'react';
import './HeaderIcon.css';

export class HeaderIcon extends Component {
  render() {
    let {type = "add"} = this.props;

    return (
      <button className={`header-icon header-icon_${type}`}>{type}</button>
    );
  }
}


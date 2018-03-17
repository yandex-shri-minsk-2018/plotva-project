import React, {Component} from 'react';
import {HeaderIcon} from "../HeaderIcon/HeaderIcon";
import './Header.css';

export class Header extends Component {
  render() {
    let {title, subtitle, size} = this.props;
    return (
      <div className={`header header_${size}`}>
        <div className="header__left">

        </div>
        <div className="header__center">
          <div className="header__center-top">{title}</div>

          {size === 'lg' &&
            <div className="header__center-bottom">{subtitle}</div>
          }

        </div>
        <div className="header__right">
          <HeaderIcon type={'add'} />
        </div>
      </div>
    );
  }
}


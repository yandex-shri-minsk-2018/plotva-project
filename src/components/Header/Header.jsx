import React, {Component} from 'react';
import {HeaderIcon} from "../HeaderIcon/HeaderIcon";
import './Header.css';

export class Header extends Component {
  render() {
    let {title, subtitle, size} = this.props;
    return (
      <div className={`header-inner header-inner--${size}`}>
        <div className="header-left">

        </div>
        <div className="header-center">
          <div className="header-center__top">{title}</div>

          {size === 'lg' &&
            <div className="header-center__bottom">{subtitle}</div>
          }

        </div>
        <div className="header-right">
          <HeaderIcon type={'add'} />
        </div>
      </div>
    );
  }
}


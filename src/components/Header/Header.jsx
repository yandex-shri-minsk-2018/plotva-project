import React, {Component} from 'react';
import {HeaderIcon} from "../HeaderIcon/HeaderIcon";
import {SearchInput} from "../SearchInput/SearchInput";
import {HeaderTitle} from "../HeaderTitle/HeaderTitle";
import {HeaderActionBtn} from "../HeaderActionBtn/HeaderActionBtn";
import './Header.css';

export class Header extends Component {
  render() {
    let {title, subtitle} = this.props,
        size = subtitle ? "lg" : "sm";
    return (
      <div className={`header header_${size}`}>
        <div className="header__left">
          <SearchInput />
        </div>

        {title && (
          <div className="header__center">
            <HeaderTitle
              title={title}
              subtitle={subtitle}
            />
          </div>
        )}

        <div className="header__right">
          {/*<HeaderIcon type={'add'} />*/}

          <HeaderActionBtn txt={'Cancel'}/>
        </div>
      </div>
    );
  }
}


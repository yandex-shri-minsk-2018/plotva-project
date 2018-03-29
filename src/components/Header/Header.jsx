import React, {Component} from 'react';
import {HeaderIcon} from "../HeaderIcon/HeaderIcon";
import {SearchInput} from "../SearchInput/SearchInput";
import {HeaderTitle} from "../HeaderTitle/HeaderTitle";
import {HeaderActionBtn} from "../HeaderActionBtn/HeaderActionBtn";
import {HeaderBackBtn} from "../HeaderBackBtn/HeaderBackBtn";
import {Avatar} from "../Avatar/Avatar";
import './Header.css';

export class Header extends Component {
  render() {
    let {title, subtitle, type = "chats"} = this.props,
        size = subtitle ? "lg" : "sm";
    return (

      <div className={`header header_${size}`}>
        <div className="header__left">
          {type === "search" && <SearchInput />}
          {type === "dialog" && <HeaderBackBtn txt="Back" />}
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
          {type === "contacts" && <HeaderIcon type="add" />}
          {type === "chats" && <HeaderIcon type="write" />}
          {type === "search" && <HeaderActionBtn txt="Cancel"/>}
          {type === "dialog" && <Avatar size="xsmall" />}
        </div>
      </div>
    );
  }
}


import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Icon} from "../Icon/Icon";
import {SearchInput} from "../SearchInput/SearchInput";
import {HeaderTitle} from "../HeaderTitle/HeaderTitle";
import {HeaderBtn} from "../HeaderBtn/HeaderBtn";
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
          {type === "dialog" && <Link to="/chats"><HeaderBtn type="back" txt="Back" /></Link>}
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
          {type === "contacts" && <Link to="/search"><Icon type="header-add" /></Link>}
          {type === "chats" && <Link to="/dialog"><Icon type="header-write" /></Link>}
          {type === "search" && <Link to="/contacts"><Header type='action' txt="Cancel"/></Link>}
          {type === "dialog" && <Avatar size="xsmall" />}
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';
import './HeaderTitle.css';

export class HeaderTitle extends Component {
  render() {
    let {title, subtitle} = this.props;
    return (
        <div>
          <div className="header-title">{title}</div>
          {subtitle && (
            <div className="header-subtitle">{subtitle}</div>
          )}
        </div>
      );
  }
}

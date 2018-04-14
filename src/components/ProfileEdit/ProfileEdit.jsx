import React, { Component } from 'react';
import { Contact } from "../Contact/Contact";

import { connect } from 'react-redux';

import api from '../../../src/api.js'

export class ProfileEdit extends Component {

  state = {
    edit: false
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Contact
          userName={user.name}
          content={user.phone}
          size="large"
          contentType="message"
          color="7"
        />
        <div>
          <label className="input-wrapper">
            Введите имя:
            <input type="text" value={}/>
          </label>
          <label className="input-wrapper">
            Введите e-mail:
            <input type="email" value={}/>
          </label>
          <label className="input-wrapper">
            <input type="tel" value={}/>
          </label>
        </div>
        <button>Сохранить</button>

        {/*{error ? <p>{error.message}</p> : ''}*/}
      </React.Fragment>
    );
  }
}


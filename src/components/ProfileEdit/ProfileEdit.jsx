import React, { Component } from 'react';

import { InputGroup } from "../InputGroup/InputGroup";
import { Button } from "../Button/Button";

import { connect } from 'react-redux';
import { setUser } from '../../store/actions/userActions';

import './ProfileEdit.css';

import api from '../../api'

export class ProfileEditComponent extends Component {

  state = {
    ...this.props.user
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = this.state;

    api.saveUser(user)
      .then(() => {
        this.props.dispatch(setUser(user));
      })
      .catch((e) => {
        console.log(e);
      })
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { user } = this.props;
    return (
        <form className="profile-edit" onSubmit={this.onSubmit}>

          <InputGroup type="text" name="name" onInputChange={this.onInputChange} value={user.name} label="Введите имя:" />
          <InputGroup type="email" name="email" onInputChange={this.onInputChange} value={user.email} label="Введите e-mail:" />
          <InputGroup type="tel" name="phone" onInputChange={this.onInputChange} value={user.phone} label="Введите номер телефона:" />
          <InputGroup type="file" name="avatar" label="Прикрепить фото:" />

          <Button txt="Сохранить" />

        </form>
    );
  }
}

const stateToProps = (state) => ({
  user: state.user
});

export const ProfileEdit = connect(stateToProps)(ProfileEditComponent);

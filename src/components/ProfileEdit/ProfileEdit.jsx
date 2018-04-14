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

  onSubmit = () => {
    const data = {
      name: this.state.name ? this.state.name : this.props.user.name,
      email: this.state.email ? this.state.email : this.props.user.email,
      phone: this.state.phone ? this.state.phone : this.props.user.phone,
      _id: this.props.user._id
    };

    api.saveUser(data)
      .then(() => {
        this.props.dispatch(setUser(data));
      })
      .catch((e) => {
        console.log(e);
      })
  };

  onInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { user } = this.props;
    return (
        <form className="profile-edit" onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit()
        }}>

          <InputGroup type="text" name="name" onInputChange={this.onInputChange} value={user.name} label="Введите имя:" />
          <InputGroup type="email" name="email" onInputChange={this.onInputChange} value={user.email} label="Введите e-mail:" />
          <InputGroup type="tel" name="phone" onInputChange={this.onInputChange} value={user.phone} label="Введите номер телефона:" />

          <Button txt="Сохранить" />

        </form>
    );
  }
}

const stateToProps = (state) => ({
  user: state.user
});

export const ProfileEdit = connect(stateToProps)(ProfileEditComponent);

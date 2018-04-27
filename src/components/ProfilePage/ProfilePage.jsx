import React, { Component } from 'react';
import { ProfileEdit } from '../ProfileEdit/ProfileEdit';
import { Icon } from '../Icon/Icon'

import { connect } from 'react-redux';
import './ProfilePage.css';

class ProfilePageComponent extends Component {

  state = {
    edit: false,
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit
    }));
  }

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className="profile-info">
          <img src={user.img} alt={user.name} className="profile-info_img" />
          <div className="profile-info_txt">
            <p className="profile-info_name">{user.name}</p>
            <p className="profile-info_email">{user.email}</p>
            <p className="profile-info_phone">{user.phone}</p>
          </div>
          <button className="profile-info_edit" onClick={this.toggleEdit}><Icon type="header-write" /></button>
        </div>

        {this.state.edit && <ProfileEdit toggleEdit={this.toggleEdit} />}

      </React.Fragment>
    );
  }
}

const stateToProps = (state) => ({
  user: state.user
});

export const ProfilePage = connect(stateToProps)(ProfilePageComponent);

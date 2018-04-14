import React, { Component } from 'react';
import { Contact } from '../Contact/Contact';
import { ProfileEdit } from '../ProfileEdit/ProfileEdit';

import { connect } from 'react-redux';

class ProfilePageComponent extends Component {

  state = {
    edit: false,
  };

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Contact
          avatar={user.img}
          userName={user.name}
          content={user.phone}
          size="large"
          contentType="message"
          color="7"
        />

        <ProfileEdit />

        {/*{error ? <p>{error.message}</p> : ''}*/}
      </React.Fragment>
    );
  }
}

const stateToProps = (state) => ({
  user: state.user
});

export const ProfilePage = connect(stateToProps)(ProfilePageComponent);

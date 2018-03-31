import React from 'react';
import { storiesOf } from '@storybook/react';
import FooterBtn from '../../src/components/FooterBtn/FooterBtn';
import ChatsIcon from '../../src/components/Footer/chats.svg';
import SettingsIcon from '../../src/components/Footer/settings.svg';
import ContactsIcon from '../../src/components/Footer/contacts.svg';

export default storiesOf('FooterBtn', module)
.add('Standart FooterBtn', () => ([
  <FooterBtn source={ChatsIcon} description='Chats'/>,
  <FooterBtn source={SettingsIcon} description='Settings'/>,
  <FooterBtn source={ContactsIcon} description='Contacts'/>  
]));

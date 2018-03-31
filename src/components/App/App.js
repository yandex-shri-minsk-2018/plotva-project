import React, { Component } from 'react';
import { Layout } from '../Layout/Layout';
import { Contacts } from '../Contacts/Contacts';
import { Header } from '../Header/Header';
import { SearchInput } from '../SearchInput/SearchInput';
import { Footer } from '../Footer/Footer';
import { MessagesList } from '../MessagesList/MessagesList';
import { InputBar } from '../InputBar/InputBar';
import { UserList } from "../UserList/UserList";
import { Link, Route } from 'react-router-dom';
import './App.css';
import { ChatsPage } from '../ChatsPage/ChatsPage';

const ContactsPage = () => (
  <Layout
    header={<Header type="contacts" title="Contacts" subtitle="" />}
    content={
      <React.Fragment>
        <SearchInput />
        <UserList />
      </React.Fragment>
    }
    footer={<Footer />}
  />
);

const ChatView = () => (
  <Layout header={<Header type="chats" title="Chats" subtitle="" />} content={<ChatsPage />} footer={<Footer />} />
);

const SearchPage = () => (
  <Layout
    header={<Header type="search" title="" subtitle="" />}
    content={
      <Contacts
        contacts={[
          {
            userName: 'Aaron A Aaronson',
            content: 'Some messege',
            contentType: 'messege',
            time: '9:30',
            size: 'medium',
            checked: true,
            count: 3,
            icon: 'message-read',
          },
          {
            userName: 'Aaron A Aaronson',
            content: 'online',
            contentType: 'online',
            size: 'medium',
          },
          {
            userName: 'Aaron A Aaronson',
            content: 'Some messege',
            contentType: 'messege',
            size: 'medium',
          },
        ]}
      />
    }
    footer={<Footer />}
  />
);

const DialogPage = () => (
  <Layout
    header={<Header type="dialog" title="Dialog Name" subtitle="last seen yesterday" />}
    content={
      <MessagesList
        messages={[
          {
            isMy: false,
            text: 'Здарова, бандиты',
            status: 'read',
            time: Date.now(),
          },
          {
            isMy: true,
            text: 'И тебе здарова',
            status: 'sent',
            time: Date.now(),
          },
        ]}
      />
    }
    footer={<InputBar />}
  />
);

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={ChatView} />
        <Route exact path="/chats" component={ChatView} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/dialog" component={DialogPage} />
        <Route exact path="/search" component={SearchPage} />
      </React.Fragment>
    );
  }
}

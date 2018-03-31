import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchInput } from '../SearchInput/SearchInput';
import { Contacts } from '../Contacts/Contacts';
import { ChatsPage } from '../ChatsPage/ChatsPage';
import { Chat } from '../Chat/Chat';
import { MessagesList } from '../MessagesList/MessagesList';
import { InputBar } from '../InputBar/InputBar';


import './App.css';

const ContactsPage = () => (
  <Layout
    header={<Header type="contacts" title="Contacts" subtitle="" />}
    content={
      <React.Fragment>
        <SearchInput />
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
    content={<Chat />}
    footer={<InputBar />}
  />
);

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ChatView} />
        <Route exact path="/chats" component={ChatView} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/chat/:id" component={DialogPage} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    );
  }
}

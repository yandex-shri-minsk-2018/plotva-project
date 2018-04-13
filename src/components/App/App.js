import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchInput } from '../SearchInput/SearchInput';
import { SearchPage } from '../SearchPage/SearchPage';
import { Contacts } from '../Contacts/Contacts';
import { UserList } from '../UserList/UserList';
import { ChatsPage } from '../ChatsPage/ChatsPage';
import { Chat } from '../Chat/Chat';
import { ChatForm } from '../ChatForm/ChatForm';

import './App.css';

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

const SearchView = () => (
  <Layout header={<Header type="search" title="" subtitle="" />} content={<SearchPage />} footer={<Footer />} />
);

const DialogPage = () => (
  <Layout
    header={<Header type="dialog" title="Dialog Name" subtitle="last seen yesterday" />}
    content={<Chat />}
    footer={<ChatForm />}
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
        <Route exact path="/search" component={SearchView} />
      </Switch>
    );
  }
}

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchInput } from '../SearchInput/SearchInput';
import { Contacts } from '../Contacts/Contacts';
import { UserList } from '../UserList/UserList';
import { ChatsPage } from '../ChatsPage/ChatsPage';
import { Chat } from '../Chat/Chat';
import { ChatForm } from '../ChatForm/ChatForm';
import { ProfilePage } from '../ProfilePage/ProfilePage';
import { Init } from '../Init/Init';

const ContactsPage = () => (
  <Layout
    header={<Header type="contacts" title="Contacts" subtitle="" />}
    content={
      <React.Fragment>
        <SearchInput />
        <UserList />
      </React.Fragment>
    }
    footer={<Footer path='Contacts'/>}
  />
);

const ChatView = () => (
  <Layout header={<Header type="chats" title="Chats" subtitle="" />} content={<ChatsPage />} footer={<Footer path='Chats'/>} />
);

const ProfileView = () => (
  <Layout
    header={<Header type="profile" title="Profile" subtitle="" />}
    content={<ProfilePage />}
    footer={<Footer />}
  />
);

const SearchPage = () => (
  <Layout
    header={<Header type="search" title="" subtitle="" />}
    content={
      <Contacts
        contacts={[
          {
            userName: 'Aaron A Aaronson',
            content: 'Some message',
            contentType: 'message',
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
            content: 'Some message',
            contentType: 'message',
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
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/init/create/:name" component={Init} />
        <Route exact path="/init/join/:roomId" component={Init} />
        <Route exact path="/profile" component={ProfileView} />
      </Switch>
    );
  }
}

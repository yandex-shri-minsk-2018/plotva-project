import React, { Component } from 'react';
import { Layout } from '../Layout/Layout';
import { Contacts } from '../Contacts/Contacts';
import { Header } from '../Header/Header';
import { SearchInput } from '../SearchInput/SearchInput';
import { Footer } from '../Footer/Footer';
import { MessagesList } from "../MessagesList/MessagesList";
import { Link, Route } from 'react-router-dom'
import './App.css';

const ContactsPage = () => (
  <Layout header={<Header type="contacts" title="Contacts" subtitle="" />} content={
    <React.Fragment>
      <SearchInput/>
      <Contacts contacts = {
        [
          {
            userName: 'Aaron A Aaronson',
            content: 'Some messege',
            contentType: 'messege',
            time: '9:30',
            size: 'medium',
            checked: true,
            count: 3,
            icon: 'message-read'
          },
          {
            userName: 'Aaron A Aaronson',
            content: 'online',
            contentType: 'online',
            size: 'medium'
          },
          {
            userName: 'Aaron A Aaronson',
            content: 'Some messege',
            contentType: 'messege',
            size: 'medium'
          },
        ]
      }/>
    </React.Fragment>
  }
          footer={<Footer />}/>
);

const ChatsPage = () => (
  <Layout header={<Header type="chats" title="Chats" subtitle="" />}
          content={<Contacts contacts = {
            [
              {
                userName: 'Aaron A Aaronson',
                content: 'Some messege',
                contentType: 'messege',
                time: '9:30',
                size: 'medium',
                checked: true,
                count: 3,
                icon: 'message-read'
              },
              {
                userName: 'Aaron A Aaronson',
                content: 'online',
                contentType: 'online',
                size: 'medium'
              },
              {
                userName: 'Aaron A Aaronson',
                content: 'Some messege',
                contentType: 'messege',
                size: 'medium'
              },
            ]
          }/>}
          footer={<Footer />}/>
);

const SearchPage = () => (
  <Layout header={<Header type="search" title="" subtitle="" />} content={
      <Contacts contacts = {
        [
          {
            userName: 'Aaron A Aaronson',
            content: 'Some messege',
            contentType: 'messege',
            time: '9:30',
            size: 'medium',
            checked: true,
            count: 3,
            icon: 'message-read'
          },
          {
            userName: 'Aaron A Aaronson',
            content: 'online',
            contentType: 'online',
            size: 'medium'
          },
          {
            userName: 'Aaron A Aaronson',
            content: 'Some messege',
            contentType: 'messege',
            size: 'medium'
          },
        ]
      }/>
  }
          footer={<Footer />}/>
);

const DialogPage = () => (
  <Layout header={<Header type="dialog" title="Dialog Name" subtitle="last seen yesterday" />} content={
    <MessagesList messages={[{
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
      }]} />
  }
          footer={<Footer />}/>
);

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={ChatsPage}/>
        <Route exact path='/chats' component={ChatsPage}/>
        <Route exact path='/contacts' component={ContactsPage}/>
        <Route exact path='/dialog' component={DialogPage}/>
        <Route exact path='/search' component={SearchPage}/>


       {/* <Layout header={<Header type={page} title={title} subtitle={subtitle} />} content={
          <React.Fragment>
            {page === "contacts" && <SearchInput/>}
            <Link to="/dialog">Home</Link>
            <Contacts contacts = {
              [
                {
                  userName: 'Aaron A Aaronson',
                  content: 'Some messege',
                  contentType: 'messege',
                  time: '9:30',
                  size: 'medium',
                  checked: true,
                  count: 3,
                  icon: 'message-read'
                },
                {
                  userName: 'Aaron A Aaronson',
                  content: 'online',
                  contentType: 'online',
                  size: 'medium'
                },
                {
                  userName: 'Aaron A Aaronson',
                  content: 'Some messege',
                  contentType: 'messege',
                  size: 'medium'
                },
              ]
            }/>
          </React.Fragment>
        }
                footer={<Footer />}/>*/}

      </React.Fragment>


    );
  }
}

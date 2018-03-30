import React, {Component} from 'react';
import {Layout} from '../Layout/Layout';
import {Contacts} from '../Contacts/Contacts';
import {Header} from "../Header/Header";
import {SearchInput} from "../SearchInput/SearchInput";
import './App.css';

export class App extends Component {
  render() {
    let page = "contacts",
        title = "Contacts",
        subtitle = "";
    return (
      <Layout header={<Header type={page} title={title} subtitle={subtitle} />} content={
        <div>
          {page === "contacts" && <SearchInput/>}
          <Contacts contacts = {
            [
              {
                userName: 'Aaron A Aaronson',
                content: 'Some messege',
                contentType: 'messege',
                time: '9:30',
                size: 'medium',
                icon: 'x',
                checked: true,
                count: 3,
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
        </div>
      }
      footer={'footer'}/>
    );
  }
}

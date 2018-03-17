import React, {Component} from 'react';
import {Layout} from '../Layout/Layout';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Layout header={'header'} content={'content'} footer={'footer'}/>
    );
  }
}

import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);
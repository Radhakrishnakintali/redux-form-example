import React, { Component } from 'react';
import SignInForm from './SignInForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleSignIn = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React x redux-form</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Contact Form
          </p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default App;
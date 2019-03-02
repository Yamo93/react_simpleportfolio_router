import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LeftBar from './components/LeftBar/LeftBar';
import MainPage from './containers/MainPage/MainPage';
import LogoBar from './components/LogoBar/LogoBar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App main">
          <LeftBar />
          <MainPage />
          <LogoBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

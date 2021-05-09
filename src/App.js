import React, { Component } from 'react'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <div style={{margin: '0 25px'}}>
            <Search />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App


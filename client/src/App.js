import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';


class App extends Component {
  render() {
    return (
      <div className="App">
            <h1>blah</h1>
          <AppNavbar/>
          <ShoppingList/>
      </div>
    );
  }
}

export default App;
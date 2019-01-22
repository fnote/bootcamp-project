import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import {Container } from 'reactstrap';

//wrap everything in provider to move stuff to redyx

class App extends Component {
  render() {
    return (

        <Provider store ={store}>
         <div className="App">
              <h1>blah</h1>
         <Container>
            <AppNavbar/>
             <ItemModal/>
            <ShoppingList/>
             </Container>
          </div>
        </Provider>
    );
  }
}

export default App;

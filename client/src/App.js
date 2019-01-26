import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import Login from './components/login';
import Signup from './components/signup';
import Homepage from './components/homepage';
import {Container} from 'reactstrap';
import {Switch,Router,Route,browserHistory} from "react-router";
import {Link,BrowserRouter} from "react-router-dom";

//wrap everything in provider to move stuff to redyx

class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }



    render() {


        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };

        return (

            <Provider store={store}>


                    <BrowserRouter>
                        <div className="App">
                        <Switch>
                        <Route exact path={"/"} component ={Login} />
                        {/*<Route path={"login"} component={ShoppingList}  />*/}
                            <Route exact path='/login' component={Login}  />
                            <Route exact path='/home' component={Homepage}  />
                            <Route exact path='/signup' component={Signup}  />
                            <Route exact path='/userOrders' component={ShoppingList}  />


                            <ul>

                                <li> <Link to="/">Home</Link> </li>

                                <li> <Link to="/homepage">jomepage</Link> </li>

                                <li> <Link to="/">shopping list</Link> </li>
                            </ul>
                        </Switch>
                        </div>
                    </BrowserRouter>

                    {/*<Container>*/}
                        {/*<AppNavbar/>*/}
                        {/*<ItemModal/>*/}
                        {/*<ShoppingList/>*/}
                    {/*</Container>*/}
                    {/*<Login/>*/}
                    {/*<Homepage/>*/}

            </Provider>
        );
    }
}

export default App;

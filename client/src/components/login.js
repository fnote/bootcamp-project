import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../login.css";
import {connect} from 'react-redux';
import {  } from '../actions/customerActions';
import {MapStateToProps} from "react-redux/es/connect/mapStateToProps";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {login} from "../actions/customerActions";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    componentDidMount() {


    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };

        //Add User
        console.log(newUser);
        this.props.login(newUser);

        const {loggedIn} = this.props.user;
        console.log(loggedIn);

        if (loggedIn) {
            console.log('user logged on');
            this.props.history.push('/userOrders');
        }
    }



    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

//
// Login.propTypes={
//     getItems:PropTypes.func.isRequired,
//     item:PropTypes.object.isRequired,
// }
//


const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    {login}
)(Login);


//convert state in to an item property so that can be used in the comonent


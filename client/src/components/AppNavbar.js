import React,{Component} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Container from "reactstrap/es/Container";

class AppNavbar extends Component{
    //
    // constructor(props){
    //     super(props);

        state={
            isOpen:false
        }
   ////

    toggle =() => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }


    render= ()=>{
            return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">

                    <Container>

                        <NavbarBrand href="/">shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar></Nav>
                            <NavItem>
                                <NavLink href="http://github.com/fnote">Github</NavLink>
                            </NavItem>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            );

    };
}


//custom method have to bind this in the constructor or use the arrow function


export default AppNavbar;

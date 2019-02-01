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

class AddOrders extends Component{
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

                       <h3>add orders here </h3>
                        <h3>{this.props.fromparent}</h3>
                    </Container>
                </Navbar>
            </div>
        );

    };
}


//custom method have to bind this in the constructor or use the arrow function


export default AddOrders;


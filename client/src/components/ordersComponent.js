import React,{Component} from 'react';
import ShoppingList from "./ShoppingList";

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
import OrderModal from "./orderModal";
import Products from "./products";
import AddOrders from "./addOrders";

class OrdersComponent extends Component{
    //
    // constructor(props){
    //     super(props);

    // state={
    //     isOpen:false
    // }
    // ////
    //
    // toggle =() => {
    //     this.setState({
    //         isOpen:!this.state.isOpen
    //     })
    // }

    //parent product for orders and products

    myCallback = (dataFromChild) => {

    }

    render= ()=>{
        return(
            <div>I
               <ShoppingList callbacks={this.myCallback.bind(this)}/>
                <Container>
                    <Products/>
                    <OrderModal/>

                </Container>

            </div>
        );

    };
}


//custom method have to bind this in the constructor or use the arrow function


export default OrdersComponent;

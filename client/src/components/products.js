import React,{Component} from 'react';
import uuid from "uuid";
import {Container ,ListGroup,ListGroupItem,Button} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getProducts,deleteProduct } from '../actions/productActions';
import {MapStateToProps} from "react-redux/es/connect/mapStateToProps";
import PropTypes from 'prop-types';
import OrdersComponent from'./ordersComponent';
import AddOrders from "./addOrders";

class Products extends Component{

    constructor(props) {
        super(props);

    }

    state={
        isOpen:false,
        id:''
    }
    ////

    // toggle =() => {
    //     this.setState({
    //         isOpen:!this.state.isOpen
    //     })


    componentDidMount() {
        this.props.getProducts();
    }

    onDeleteClick= (id)=>{
        this.props.deleteProduct(id);
    }

    onAddToCart= (id)=>{
        this.setState({
            id:id
        });
    }


    render() {
        //pull from state
        // const {items} = this.state



        console.log("products rendering");

        const {products} = this.props.product;

        console.log(products);

        return (

            <Container>

                <ListGroup>
                    <h3>available products</h3>

                    <TransitionGroup className="shopping-list">

                        {products.map(({_id,name,price})=>(

                            <CSSTransition key= {_id} timeout={500} classNames="fade">

                                <ListGroupItem>
                                    <button className="remove-btn" color="danger" size="lg"

                                            onClick={this.onDeleteClick.bind(this,_id )}
                                        // onClick={()=>
                                        //     this.setState(state=>({
                                        //         items:state.items.filter(item=>item.id !==id)
                                        //     }))

                                    >
                                        &times;

                                    </button>
                                    <h3>items </h3>
                                    {name}

                                    <span className="second-word-formatting m-2">id : {_id}</span>

                                    <span className="second-word-formatting m-2"><h3>{name}</h3></span>

                                    <span className="second-word-formatting m-2">{price}</span>

                                    <button onClick={this.onAddToCart.bind(this,_id)}>add to order</button>
                                    {/*<button onClick={this.onAddToCart.bind(this,_id )}add item to cart</button>*/}
                                    {/*<button >button</button>*/}

                                </ListGroupItem>
                            </CSSTransition>
                        ) )}

                    </TransitionGroup>
                </ListGroup>
                <AddOrders fromparent={this.state.id}/>
            </Container>
        );
    }
}

Products.propTypes={
    getProducts:PropTypes.func.isRequired,
    product:PropTypes.object.isRequired,
}

const mapStateToProps =(state)=>({

    product:state.product
});

export default connect(mapStateToProps,{getProducts,deleteProduct}) (Products);
//convert state in to an item property so that can be used in the comonent


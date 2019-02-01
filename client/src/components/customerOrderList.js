import React,{Component} from 'react';
import uuid from "uuid";
import {Container ,ListGroup,ListGroupItem,Button} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getOrders,deleteOrders,viewOrder,setOrderID } from '../actions/orderActions';

import {MapStateToProps} from "react-redux/es/connect/mapStateToProps";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class customerOrderList extends Component{


    componentDidMount() {
        console.log("compoent did mount customer order list");
        this.props.getOrders();
    }

    onDeleteClick= (id)=>{
        // this.props.deleteOrders(id);
        console.log('deleted');
    }

    viewOneOrder= (id)=>{

        // this.props.viewOrder(id);
        console.log('view order');
        console.log(id);
        this.props.setOrderID(id);
        // this.props.history.push('/viewOrders'+id);
        // this.props.viewOrder(id);
    }

    render() {
        //pull from state
        // const {items} = this.state

//thi.props.order only accesses order part of the store
        const {orders} = this.props.order;

        console.log(orders);
        // orders.map(order=>
        //     <li>{order}</li>
        // );

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        <h3> Your orders</h3>
                        {orders.map(({_id,product})=>(
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


                                    <h3> order 1</h3>
                                    <span className="second-word-formatting m-2">{_id}</span>

                                    <span className="second-word-formatting m-2"><h3>{product.name}</h3></span>

                                    <span className="second-word-formatting m-2">{product.price}</span>

                                    <Link to={"/orders/" + _id}>
                                    <button onClick={this.viewOneOrder.bind(this,_id)}>view order</button>
                                    </Link>




                                </ListGroupItem>
                            </CSSTransition>
                        ) )}

                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

customerOrderList.propTypes={
    getOrders:PropTypes.func.isRequired,
    order:PropTypes.object.isRequired,
}

const mapStateToProps =(state)=>({

    order:state.order
});

export default connect(mapStateToProps,{getOrders,viewOrder,setOrderID}) (customerOrderList);
//convert state in to an item property so that can be used in the comonent


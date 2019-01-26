import React,{Component} from 'react';
import uuid from "uuid";
import {Container ,ListGroup,ListGroupItem,Button} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getOrders,deleteOrders } from '../actions/orderActions';

import {MapStateToProps} from "react-redux/es/connect/mapStateToProps";
import PropTypes from 'prop-types';

class homepage extends Component{


    componentDidMount() {
        this.props.getOrders();
    }

    onDeleteClick= (id)=>{
        // this.props.deleteOrders(id);
        console.log('deleted');
    }

    render() {
        //pull from state
        // const {items} = this.state


        const orders = this.props.order.orders;
        return (
            <Container>


                <ListGroup>

                    <TransitionGroup className="shopping-list">

                        {Object.values(orders).map((_id,product,quantity)=> {
                                return (
                                    <CSSTransition key={_id} timeout={500} classNames="fade">

                                        <ListGroupItem>
                                            <button className="remove-btn" color="danger" size="lg"

                                                    onClick={this.onDeleteClick.bind(this, _id)}
                                                // onClick={()=>
                                                //     this.setState(state=>({
                                                //         items:state.items.filter(item=>item.id !==id)
                                                //     }))

                                            >
                                                &times;

                                            </button>

                                            product
                                        </ListGroupItem>
                                    </CSSTransition>
                                )
                            }
                        ) }

                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

homepage.propTypes={
    getOrders:PropTypes.func.isRequired,
    order:PropTypes.object.isRequired,
}

const mapStateToProps =(state)=>({

    order:state.order
});

export default connect(mapStateToProps,{getOrders}) (homepage);
//convert state in to an item property so that can be used in the comonent


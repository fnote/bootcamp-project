import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import customerOrderList from './customerOrderList';
import {connect} from "react-redux";
import {getOrders, viewOrder,getOrderID} from "../actions/orderActions";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {ListGroupItem} from "reactstrap";


class ViewOrders extends Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            orderDetails: {}
        };
    }

    componentDidMount() {
        // axios.get('/api/user/'+this.props.match.params.id)
        //     .then(res => {
        //         this.setState({ contact: res.data });
        //         console.log(this.state.contact);
        //     });
        // 5c4834d35c67e7451b239d14
        // this.props.viewOrders();
        // const {id} = this.props.match.params;

        const {orderID}= this.props.order;

        console.log("test");
        console.log(orderID);

        // console.log(id);
       const orderDetails =this.props.viewOrder(orderID);
        this.setState({ orderDetails: orderDetails});


    }

    delete(id){
        console.log(id);
        axios.delete('/contacts/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {

       const {orders} =this.state.orderDetails;

       console.log(orders);

        return (
            <div class="container">
                <div class="panel panel-default">

                    <div class="panel-body">

                        {/*{orders.map(({_id,product})=>(*/}
                            {/*<CSSTransition key= {_id} timeout={500} classNames="fade">*/}

                                {/*<ListGroupItem>*/}
                                    {/*<button className="remove-btn" color="danger" size="lg"*/}

                                            {/*// onClick={this.onDeleteClick.bind(this,_id )}*/}
                                        {/*// onClick={()=>*/}
                                        {/*//     this.setState(state=>({*/}
                                        {/*//         items:state.items.filter(item=>item.id !==id)*/}
                                        {/*//     }))*/}

                                    {/*>*/}
                                        {/*&times;*/}

                                    {/*</button>*/}


                                    {/*<h3> order 1</h3>*/}
                                    {/**/}
                                    {/*<span className="second-word-formatting m-2">{_id}</span>*/}

                                    {/*<span className="second-word-formatting m-2"><h3>{product._id}</h3></span>*/}


                                    {/*<span className="second-word-formatting m-2"><h3>{product.name}</h3></span>*/}

                                    {/*<span className="second-word-formatting m-2">{product.price}</span>*/}

                                    {/*/!*<Link to={"/orders/" + _id}>*!/*/}
                                        {/*/!*<button onClick={this.viewOneOrder.bind(this,_id)}>view order</button>*!/*/}
                                    {/*/!*</Link>*!/*/}




                                {/*</ListGroupItem>*/}
                            {/*</CSSTransition>*/}
                        {/*) )}*/}


                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps =(state)=>({

    order:state.order
});

export default connect(mapStateToProps,{viewOrder,getOrderID}) (ViewOrders);

//when you bring in ac action it will be sotred ad a prop
//this.prop.get item
//put it inside proptypes



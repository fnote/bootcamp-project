import React,{Component} from 'react';
import uuid from "uuid";
import {Container ,ListGroup,ListGroupItem,Button} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem } from '../actions/itemActions';
import {MapStateToProps} from "react-redux/es/connect/mapStateToProps";
import PropTypes from 'prop-types';

class ShoppingList extends Component{

    // state={
    //     items:[
    //
    //         {id:uuid(), name: 'eggs'},
    //         {id:uuid(), name:'milk'},
    //         {id:uuid(), name:'steak' },
    //         {id:uuid(), name: 'water' },
    //     ]
    // }

    //if u wanna make an action api call this is where you do it
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick= (id)=>{
        this.props.deleteItem(id);
    }

    render() {
        //pull from state
        // const {items} = this.state
        const {items} = this.props.item;
        return (
            <Container>

                {/*<button color="dark" style={{marginBottom: '2rem'}}*/}
                        {/*onClick={() => {*/}
                            {/*const name = prompt('Enter item');*/}

                            {/*if (name) {*/}
                                {/*this.setState(state => ({*/}
                                    {/*items: [...state.items, {id: uuid, name}]*/}

                                {/*}));*/}
                            {/*}*/}
                        {/*}*/}

                        {/*}*/}
                {/*> ADD ITEM*/}
                {/*</button>*/}

                <ListGroup>

                    <TransitionGroup className="shopping-list">

                        {items.map(({_id,name})=>(
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

                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ) )}

                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes={
    getItems:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired,
}

const mapStateToProps =(state)=>({

    item:state.item
});

export default connect(mapStateToProps,{getItems,deleteItem}) (ShoppingList);
//convert state in to an item property so that can be used in the comonent


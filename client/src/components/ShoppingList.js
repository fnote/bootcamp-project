import React,{Component} from 'react';

import {Container ,ListGroup,ListGroupItem,Button} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';

import uuid from 'uuid';

class ShoppingList extends Component{

    state={
        items:[

            {id:uuid(), name: 'eggs'},
            {id:uuid(), name:'milk'},
            {id:uuid(), name:'steak' },
            {id:uuid(), name: 'water' },
        ]
    }

    render() {
        const {items} = this.state
        return (
            <Container>

                <button color="dark" style={{marginBottom: '2rem'}}
                        onClick={() => {
                            const name = prompt('Enter item');

                            if (name) {
                                this.setState(state => ({
                                    items: [...state.items, {id: uuid, name}]

                                }));
                            }
                        }

                        }
                > ADD ITEM
                </button>

                <ListGroup>

                    <TransitionGroup className="shopping-list">

                        {items.map(({id,name})=>(
                            <CSSTransition key= {id} timeout={500} classNames="fade">

                                <ListGroupItem>
                                    <button className="remove-btn" color="danger" size="lg"
                                            onClick={()=>
                                                this.setState(state=>({
                                                    items:state.items.filter(item=>item.id !==id)
                                                }))

                                    } >
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

export default ShoppingList;

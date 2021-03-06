import uuid from 'uuid';
import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Form,FormGroup,Label,Input} from 'reactstrap';
import {connect } from 'react-redux';
import {addOrder} from '../actions/orderActions';
import MapStateToProps from "react-redux/es/connect/mapStateToProps";
//container is a componenet hooked to redux

class OrderModal extends Component{

    //modal is open or not
    state={
        modal:false,
        name:''
    }

    toggle=() =>{
        this.setState({
            modal:!this.state.modal
        });
    };

    onChange=(e)=>{

        this.setState({[e.target.name]:e.target.value});

    };

    onSubmit=(e)=>{
        e.preventDefault();
        const newOrder={
            // id:uuid(),
            name:this.state.name
        }

        //add item via add item action
        this.props.addOrder(newOrder);

        //close modal
        this.toggle();
    };


    render(){
        return (
            <div>

                <button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Add Item </button>


                <Modal isOpen={this.state.modal}
                       toggle= {this.toggle} >

                    <ModalHeader toggle={this.toggle}>your order</ModalHeader>

                    <ModalBody >
                        <Form onSubmit={this.onSubmit}>

                            <FormGroup>
                                <Label for ="item" >Item</Label>
                                <input type="text" name="name" id="item" placeholder="add shopping item"  onChange={this.onChange} />
                                <Button color="dark" style={{marginBottom: '2rem'}} block>add item</Button>
                            </FormGroup>
                        </Form>

                    </ModalBody>

                </Modal>


            </div>
        );
    }

}

const mapStateToProps =(state)=>({

    order:state.order
});

export default connect(mapStateToProps,{addOrder}) (OrderModal);
import {GET_ITEMS,VIEW_ORDER, ADD_ITEM, DELETE_ORDER, LOADING_ITEMS, GET_ORDERS, ADD_ORDER, LOADING_ORDER,SET_ORDER_ID,GET_ORDER_ID} from "../actions/types";
import axios from 'axios';
//LOOKS for types in item reducer
//call get items from component
//it calls item reducer and fetches state
export const getOrders =()=>dispatch=>{
    //
    // return{
    //   type:GET_ITEMS
    // };
    //dispatch(setOrderLoading());
    axios.get('/api/orders')
        .then(res=> {
            console.log(res);
            dispatch({
                type: GET_ORDERS,
                payload: res.data.orders
            })
        }).catch((error)=>{console.log(error)})

}

export const viewOrder=(id)=>dispatch=>{
    //
    // return{
    //   type:GET_ITEMS
    // };
    //dispatch(setOrderLoading());
    console.log('view order');
    axios.get(`/api/orders/${id}`)
    // axios.get(`/api/orders`)
        .then(res=> {
            console.log(res);
            dispatch({
                type: VIEW_ORDER,
                payload: res.data.orders
            })
        }).catch((error)=>{console.log(error)})

}


//this is a dispatch to the reducer
//add a case delete items in reducer

export const deleteOrder =(id)=>dispatch =>{

    // return{
    //     type:DELETE_ITEM,
    //     payload:id
    // };
    axios.delete(`/api/orders/${id}`)
        .then(res=>
            dispatch({
                type:DELETE_ORDER,
                payload:id
            }))

}


export const addOrder =(item)=>dispatch=>{

    // return{
    //     type:ADD_ITEM,
    //     payload:item
    // };

    axios.post('/api/orders',item)
        .then(res=>
            dispatch({
                type:ADD_ORDER,
                payload:res.data
            }))


}

export const setOrderLoading =()=>{

    return{
        type:LOADING_ORDER,
    };
}

export const setOrderID =(id)=>{

    return{
        type:SET_ORDER_ID,
        payload:id
    };
}

export const getOrderID =()=>{

    return{
        type:GET_ORDER_ID,
    };
}





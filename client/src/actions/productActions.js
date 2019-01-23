import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    LOADING_ITEMS,
    GET_PRODUCTS,
    LOADING_PRODUCTS,
    ADD_PRODUCT, DELETE_PRODUCT
} from "../actions/types";
import axios from 'axios';
//LOOKS for types in item reducer
//call get items from component
//it calls item reducer and fetches state
export const getProducts =()=>dispatch=>{
    //
    // return{
    //   type:GET_ITEMS
    // };

    dispatch(setProductLoading());
    axios.get('/api/products')
        .then(res=>
            dispatch({
                type:GET_PRODUCTS,
                payload:res.data
            }))
}


//this is a dispatch to the reducer
//add a case delete items in reducer

export const deleteProduct =(id)=>dispatch =>{

    // return{
    //     type:DELETE_ITEM,
    //     payload:id
    // };
    axios.delete(`/api/products/${id}`)
        .then(res=>
            dispatch({
                type:DELETE_PRODUCT,
                payload:id
            }))

}


export const addProduct =(product)=>dispatch=>{

    // return{
    //     type:ADD_ITEM,
    //     payload:item
    // };

    axios.post('/api/products',product)
        .then(res=>
            dispatch({
                type:ADD_PRODUCT,
                payload:res.data
            }))


}

export const setProductLoading =()=>{

    return{
        type:LOADING_PRODUCTS,
    };
}



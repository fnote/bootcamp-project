import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,LOADING_ITEMS} from "../actions/types";
import axios from 'axios';
//LOOKS for types in item reducer
//call get items from component
//it calls item reducer and fetches state
export const getItems =()=>dispatch=>{
    //
    // return{
    //   type:GET_ITEMS
    // };

    dispatch(setItemLoading());
        axios.get('/api/items')
            .then(res=>
            dispatch({
                type:GET_ITEMS,
                payload:res.data
            }))
}


//this is a dispatch to the reducer
//add a case delete items in reducer

export const deleteItem =(id)=>dispatch =>{

    // return{
    //     type:DELETE_ITEM,
    //     payload:id
    // };
    axios.delete(`/api/items/${id}`)
        .then(res=>
            dispatch({
                type:DELETE_ITEM,
                payload:id
            }))

}


export const addItem =(item)=>dispatch=>{

    // return{
    //     type:ADD_ITEM,
    //     payload:item
    // };

    axios.post('/api/items',item)
        .then((res)=> {
            console.log(res)
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })


}

export const setItemLoading =()=>{

    return{
        type:LOADING_ITEMS,
    };
}



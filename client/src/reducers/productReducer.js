//where our actual state is gonna go

import uuid from "uuid";
import {GET_PRODUCTS,ADD_PRODUCT,DELETE_PRODUCT,LOADING_PRODUCTS} from "../actions/types";

const initialState={
    products:[],
    loading:false
}
const func =  function (state=initialState,action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                items:action.payload,
                loading:false
            };
        case DELETE_PRODUCT:
            return{
                ...state,
                items:state.items.filter(product=>product._id !==action.payload)
            };

        case ADD_PRODUCT:
            return{
                ...state,
                items:[action.payload,...state.items]
            };

        case LOADING_PRODUCTS:
            return{
                ...state,
                loading:true
            };

        default:
            return state ;
    }

}
export {func}
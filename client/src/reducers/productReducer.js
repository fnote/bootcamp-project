//where our actual state is gonna go
//alwats returns a state

import uuid from "uuid";
import {GET_PRODUCTS,ADD_PRODUCT,DELETE_PRODUCT,LOADING_PRODUCTS} from "../actions/types";

const initialState={
    products:[],
    loading:false
}
const productReducer =  function (state=initialState,action) {
    console.log("product reducer called");


    switch (action.type) {

        case GET_PRODUCTS:
            console.log("GETPRODUCTS ARE CALLED");
            return{
                ...state,
                products:action.payload,
                loading:false
            };
        case DELETE_PRODUCT:
            return{
                ...state,
                products:state.items.filter(product=>product._id !==action.payload)
            };

        case ADD_PRODUCT:
            return{
                ...state,
                products:[action.payload,...state.items]
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

export default productReducer;
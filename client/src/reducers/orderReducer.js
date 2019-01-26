//where our actual state is gonna go

import uuid from "uuid";
import {GET_ORDERS,ADD_ORDER,DELETE_ORDER,LOADING_ORDER} from "../actions/types";

const initialState={
    orders:[

        // {id:uuid(), name: 'eggs'},
        // {id:uuid(), name:'milk'},
        // {id:uuid(), name:'steak' },
        // {id:uuid(), name: 'water' },
    ],
    loading:false
}
const orderReducer =  function (state=initialState,action) {
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                orders:action.payload,
                loading:false
            };
        case DELETE_ORDER:
            return{
                ...state,
                orders:state.orders.filter(order=>order._id !==action.payload)
            };

        case ADD_ORDER:
            return{
                ...state,
                orders:[action.payload,...state.orders]
            };

        case LOADING_ORDER:
            return{
                ...state,
                loading:true
            };

        default:
            return state ;
    }

}
export default orderReducer;

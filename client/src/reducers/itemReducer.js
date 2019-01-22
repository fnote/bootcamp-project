//where our actual state is gonna go

import uuid from "uuid";
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,LOADING_ITEMS} from "../actions/types";

const initialState={
    items:[

        // {id:uuid(), name: 'eggs'},
        // {id:uuid(), name:'milk'},
        // {id:uuid(), name:'steak' },
        // {id:uuid(), name: 'water' },
    ],
    loading:false
}
const func =  function (state=initialState,action) {
    switch (action.type) {
        case GET_ITEMS:
            return{
                ...state,
                items:action.payload,
                loading:false
            };
        case DELETE_ITEM:
            return{
                ...state,
                items:state.items.filter(item=>item._id !==action.payload)
            };

        case ADD_ITEM:
            return{
                ...state,
                items:[action.payload,...state.items]
            };

        case LOADING_ITEMS:
            return{
                ...state,
                loading:true
            };

        default:
            return state ;
    }

}
export {func}
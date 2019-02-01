import {combineReducers} from "redux";

import itemReducer from './itemReducer';
import orderReducer from './orderReducer';
import customerReducer from "./customerReducer";
import customerOrderReducer from "./customerOrderReducer";
import productReducer from "./productReducer";
//auth reducer error reducer you can nout anything

export default combineReducers({

    item:itemReducer,
    order:orderReducer,
    user:customerReducer,
    product:productReducer,
    customerOrder:customerOrderReducer,
    // product:productReducer
})
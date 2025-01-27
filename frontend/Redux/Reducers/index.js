import { combineReducers } from "redux";
import counterReducer from "./upDown";
import changeColor from '../Actions/colourChanger'

const rootReducer =combineReducers({
    counterValue : counterReducer,
    divcolour : changeColor
});


export default rootReducer;
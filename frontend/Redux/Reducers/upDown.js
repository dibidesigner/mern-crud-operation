import { inFunction, decFunction } from "../Actions";


const initialValue = 10;




const counterReducer = (state = initialValue, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case "DECREMENT":
            return state - 5   
        default:
            return state;     
    }
}

export default counterReducer;



const changeColor = (state = "dark", action) =>{
    if (action.type == "light"){
        return state = "light"
    }else{
        return state 
    }
    
}


export default changeColor;
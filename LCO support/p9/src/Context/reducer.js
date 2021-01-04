import {ADD_TODO,REMOVE_TODO} from './action.types'

export default  (state,action)=>{

    // using if and else
    switch(action.type){

        case ADD_TODO:
            return [...state,action.payload]
            break;

        case REMOVE_TODO:
            return state.filter(todo =>todo.id !==action.payload)
        
            default :
            return state
    }
}
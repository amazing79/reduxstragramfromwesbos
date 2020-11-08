// Recordar que hace un reducer
import { INCREMENT} from  '../actions/actionsCreators'
// recibe 2 datos
// 1 la acción a realizar
// 2 una copia del estado actual del objeto en la store
// finalmente, devuelve el nuevo estado ( de ahi su nombre reducer, recibe 2 y devuelve 1)

function posts (state = [], action){
    switch(action.type){
        case INCREMENT:
            return [
                ...state.slice(0, action.index),
                {...state[action.index], likes: state[action.index].likes + 1},
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

export default posts; 
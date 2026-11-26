import { INCREMENT, DECREMENT, ADD, RESET } from '../actionTypes';
// état  globale application
const initialState = {  
                        compteur:2,
                        theme:'clair',
                        utilisateur:{nom:'ali',connected:true} ,
                        panier : [{},{}]
                    };

export default function counterReducer(state = initialState, action) {
switch (action.type) {
      case INCREMENT : return {...state,compteur:state.compteur + 1}
      case DECREMENT : return {...state,compteur:state.compteur - 1}
      case RESET     :return {...state,compteur:0}
      case ADD       : return {...state,compteur:state.compteur + action.payload}
      default: return state;
 }
 }
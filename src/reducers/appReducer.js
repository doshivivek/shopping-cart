import {FETCH_PRODUCTS, SELECT_TYPE} from '../constants/actionTypes'

export default (state, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:  
      return {
        ...state,
        products: action.payload.products,
      };
    case SELECT_TYPE:  
      return {
        ...state,
        type: action.payload.type,
      } 

    default:
      return state;
  }
}


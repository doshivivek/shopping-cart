import {FETCH_PRODUCTS} from '../constants/actionTypes'

export default (state, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      }
    default:
      return state;
  }
}
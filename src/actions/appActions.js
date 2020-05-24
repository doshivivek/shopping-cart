import { FETCH_PRODUCTS, SELECT_TYPE, ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes'

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://api4286.s3.ap-south-1.amazonaws.com/products.json')
  
  // normal dispatch
  dispatch({type: FETCH_PRODUCTS, payload: {
    products: (await response.json()).map((product, index) => ({...product, id: index}))}
  });

};


export const selectType = (type) => {
  return {
    type: SELECT_TYPE,
    payload: {type: type}
  }
}

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: {product}
  };
};

export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: {product}
  };
}

export default {
  fetchProducts, selectType, addToCart
};


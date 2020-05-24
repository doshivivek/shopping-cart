import { FETCH_PRODUCTS, SELECT_TYPE } from '../constants/actionTypes'

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://api4286.s3.ap-south-1.amazonaws.com/products.json')
  
  // normal dispatch
  dispatch({type: FETCH_PRODUCTS, payload: {products: await response.json()}});

};


export const selectType = (type) => {
  return {
    type: SELECT_TYPE,
    payload: {type: type}
  }
}

export default {
  fetchProducts, selectType
};


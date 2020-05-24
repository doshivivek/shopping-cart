import {FETCH_PRODUCTS, SELECT_TYPE, ADD_TO_CART, REMOVE_FROM_CART} from '../constants/actionTypes'

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
    case ADD_TO_CART: {
      const {product} = action.payload;
      const cartItemIndex = state.cart.findIndex(cartItem => cartItem.id === product.id);
      
      //
      // If item is not found in cart
      // add a new cart object with quantity 1
      //
      if(cartItemIndex === -1) {
        return {
          ...state,
          cart: [...state.cart, {id: product.id, price: product.price, quantity: 1, title: product.title}]
        }
      }

      //
      // if item is found in cart
      // update the quantity by 1
      //
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, cartItemIndex),
          {
            ...state.cart[cartItemIndex],
            quantity: state.cart[cartItemIndex].quantity + 1
          },
          ...state.cart.slice(cartItemIndex + 1),
        ]
      };
    }
    case REMOVE_FROM_CART: {
      const {product} = action.payload;
      const cartItemIndex = state.cart.findIndex(cartItem => cartItem.id === product.id);
      
      //
      // If item is not found in cart
      // do nothing
      //
      if(cartItemIndex === -1) {
        return state; 
      }

      const cartItem = state.cart[cartItemIndex]

      //
      // if item is found in cart
      // reduce the quantity by 1
      // if original quantity is 1
      // remove the item from cart
      //

      if(cartItem.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((cartItem, index) => index !== cartItemIndex)
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart.slice(0, cartItemIndex),
          {
            ...state.cart[cartItemIndex],
            quantity: state.cart[cartItemIndex].quantity - 1
          },
          ...state.cart.slice(cartItemIndex + 1),
        ]
      };
    }
    default:
      return state;
  }
}


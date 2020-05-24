

// initial state:
// {
//   items: [{title: strawberry, price: 100, image: , width, height, id: 1}],
//   cart: [{id: 1, count: 5 }, {id: 2, count: 3}],
//   type: 'fruit'
// }
// ACTION CREATOR
// updateFruitCount(1)
// ACTION OBJECT
// {
// type: UPDATE_FRUIT_COUNT,
// payload: { count: 1}
// }
// REDUCER
// case: UPDATE_FRUIT_COUNT
// return {
//   ...state,
//   items: [{title: strawberry, count: action.payload.count}],
// }
// final state:
// {
//   items: [{title: strawberry, count: 1}],
// }
// SELECTORS
// getFruitCount('strawberry') => {
//   return state.items.find('strawberry').count
// }
// getVegetables
// getFruits({type: fruit}) => {
// state.items.filter(({type}) => type === 'fruit')
// }
// getCartTotal: () => { return value;}
// Always store minimal data
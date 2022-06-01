const CAKE_ORDERED = "CAKE_ORDERED"; // string constant

// Action Creator
function orderCake() {
  return {
    // defining an action
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// initial state
const inititalState = {
  numberOfCakes: 10,
};

// reducer function
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, // spread operator to make a copy of all the properties
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

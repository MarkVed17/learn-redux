const redux = require("redux"); // import redux
const createStore = redux.createStore; // import the createStore redux method

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

// createStore takes an argument i.e. a reducer function,
// And the reducer function itself has state as an argument.
// This is how the redux store holds the application state.
const store = createStore(reducer); // create a redux store
console.log("Initial state", store.getState()); // allows access to the current state of the application

const unsubscribe = store.subscribe(() => console.log("Update", store.getState())); // register even listeners using subscribe()

store.dispatch(orderCake()) // dispatch function takes an action creator function which in turn invokes an action
store.dispatch(orderCake())
store.dispatch(orderCake())


unsubscribe()
// None of the dispatches would work below the unsubscribe method

store.dispatch(orderCake()) //This whon't be logged

const redux = require("redux"); // import redux
const createStore = redux.createStore; // import the createStore redux method
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED"; // string constant
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action Creator
function orderCake() {
  return {
    // defining an action
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// initial state
// const inititalState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20,
// };

// cake intital state
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

// reducer function
// const reducer = (state = inititalState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state, // spread operator to make a copy of all the properties
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numberOfIceCreams: state.numberOfIceCreams - 1,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numberOfIceCreams: state.numberOfIceCreams + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// Split the main reducer into cake & icecream reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, // spread operator to make a copy of all the properties
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

// createStore takes an argument i.e. a reducer function,
// And the reducer function itself has state as an argument.
// This is how the redux store holds the application state.
const store = createStore(rootReducer); // create a redux store. There arises a problem as we have a cake & icecream reducer and we can only pass a single reducer function to createStore method. It can be solved by combinedReducers method.
console.log("Initial state", store.getState()); // allows access to the current state of the application

const unsubscribe = store.subscribe(() =>
  console.log("Update", store.getState())
); // register even listeners using subscribe()

// store.dispatch(orderCake()); // dispatch function takes an action creator function which in turn invokes an action
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
// None of the dispatches would work below the unsubscribe method

store.dispatch(orderCake()); //This whon't be logged

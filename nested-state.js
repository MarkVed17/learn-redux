const redux = require("redux");
const createStore = redux.createStore;

// Create a constant
const STREET_UPDATED = "STREET_UPDATED";

// Create an initial state
const inititalState = {
  name: "Vedant",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

// Create an 'action creator' function
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// Create a reducer function
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default:
      return state;
  }
};

// Create a store
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update", store.getState())
);
store.dispatch(updateStreet("789 Main St"));
unsubscribe();

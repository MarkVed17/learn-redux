const configureStore = require("@reduxjs/toolkit").configureStore; // similar to createStore in redux
const cakeReducer = require("../features/cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;

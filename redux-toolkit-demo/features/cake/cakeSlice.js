const createSlice = require("@reduxjs/toolkit").createSlice; // ES Module import

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  // initialState,                                  This is a ES6 shorthand
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer                  // default export
module.exports.cakeActions = cakeSlice.actions      // named export
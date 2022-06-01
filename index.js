const CAKE_ORDERED = "CAKE_ORDERED"; // string constant

// Action Creator
function orderCake() {
  return {
    // defining an action
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

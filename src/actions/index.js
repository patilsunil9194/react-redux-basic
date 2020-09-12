// Action Creator
export const selectProduct = (product) => {
  // Return a Action
  return {
    type: "PRODUCT_SELECTED",
    payload: product,
  };
};


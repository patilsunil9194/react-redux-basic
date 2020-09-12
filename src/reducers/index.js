import { combineReducers } from "redux";

const productsReducer = () => {
  return [
    { title: "Bedsheets", price: "399" },
    { title: "Towel sets", price: "499" },
    { title: "Cushion Cover", price: "299" },
    { title: "Pillows", price: "499" },
    { title: "Curtains", price: "599" },
    { title: "Juicer", price: "4999" },
  ];
};

const selectedProductReducer = (selectedProduct = null, action) => {
  switch (action.type) {
    case "PRODUCT_SELECTED":
      return action.payload;
    default:
      return selectedProduct;
  }
};

export default combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
});

import React from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ProductList />
        </div>
        <div className="column four wide">
          <ProductDetail />
        </div>
      </div>
    </div>
  );
};

export default App;

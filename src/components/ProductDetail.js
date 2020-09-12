import React from "react";
import { connect } from "react-redux";

const ProductDetail = (props) => {
  return (
    props.product && (
      <div className="item">
        <h4>Details for:</h4>
        <p>
          title: {props.product.title} <br />
          price: {props.product.price}
        </p>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.selectedProduct,
  };
};

export default connect(mapStateToProps)(ProductDetail);

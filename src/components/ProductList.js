import React, { Component } from "react";
import { connect } from "react-redux";
import { selectProduct } from "../actions";

class ProductList extends Component {
  renderList = () => {
    return this.props.products.map((prod) => (
      <div className="item" key={Math.random()}>
        <div className="right floated content">
          <button
            onClick={() => this.props.selectProduct(prod)}
            className="ui button primary"
          >
            Select
          </button>
        </div>
        <div className="content">{prod.title}</div>
      </div>
    ));
  };
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.products };
};

export default connect(mapStateToProps, { selectProduct })(ProductList);

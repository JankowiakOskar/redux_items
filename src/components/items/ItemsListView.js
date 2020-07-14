import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ItemDetailView from "../items/ItemDetailView";

class ItemsListView extends Component {
  render() {
    const { itemList } = this.props;

    return (
      <div style={listStyle} className="itemList">
        {itemList.map((item) => {
          return (
            <Link to={`/items/${item.id}`} style={linkStyle} key={item.id}>
              <ItemDetailView itemDetails={item} />
            </Link>
          );
        })}
      </div>
    );
  }
}

const listStyle = {
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const linkStyle = {
  textDecoration: "none",
};

const mapStateToProps = (state) => {
  const { items } = state;

  return {
    itemList: items,
  };
};

export default connect(mapStateToProps, null)(ItemsListView);

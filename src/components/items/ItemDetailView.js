import React from "react";
import { deleteItem } from "../../store/actions/itemsActions";
import { connect } from "react-redux";

const ItemDetailView = (props) => {
  const { itemList, itemDetails, match } = props;
  const routeID = match ? match.params.id : "";

  const handleClick = (e) => {
    props.deleteItem(itemDetails.id);
  };

  const itemFromStore = itemDetails ? (
    <div className="item">
      <h1>{itemDetails.id}</h1>
      <h2>{itemDetails.title}</h2>
      <p>{itemDetails.content}</p>
      <button
        onClick={(e) => {
          handleClick(e);
          e.preventDefault();
        }}
      >
        Delete Item
      </button>
    </div>
  ) : null;

  const matchedRouteID = routeID
    ? itemList.map((item) => {
        if (routeID === item.id) {
          return (
            <div className="item" key={item.id}>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          );
        } else {
          return null;
        }
      })
    : null;

  return (
    <div style={itemStyle}>
      {itemFromStore}
      {matchedRouteID}
    </div>
  );
};
const itemStyle = {
  width: "80vw",
  background: "#d4d4d4",
  paddingBottom: '10px',
  margin: "50px auto",
  textAlign: "center",
  borderRadius: "5px",
};

const mapStateToProps = (state) => {
  const { items } = state;

  return {
    itemList: items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailView);

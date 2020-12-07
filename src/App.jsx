import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./redux/actions";
import "./app.scss";

const ItemContainer = ({ wishList, onClick }) => {
  return (
    <div className="item-container">
      {/* return an array that contains every single wish list item */}
      {wishList.map((item) => (
        <div className="item" key={item} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

const App = ({ wishList, addItem, deleteItem }) => {
  const [userInput, setUserInput] = useState("");

  const onInuptChange = (e) => {
    // store the current input to the input state
    setUserInput(e.target.value);
  };

  const onAddClick = () => {
    // add new item when the add button is clicked
    if (userInput.length && !wishList.includes(userInput)) addItem(userInput);
    setUserInput("");
  };

  const onSubmitClick = () => {
    // submit and clear the wish list when the submit button is clicked
    if (wishList.length) {
      alert("Wish list submitted to Santa!");
      wishList.forEach((item) => deleteItem(item));
      setUserInput("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h3 className="title">MY WISHLIST</h3>

        <ItemContainer onClick={deleteItem} wishList={wishList} />

        <input
          type="text"
          className="item-input"
          onChange={(e) => onInuptChange(e)}
          value={userInput}
        />

        <button className="add-btn btn" onClick={onAddClick}>
          Add
        </button>

        <button className="submit-btn btn" onClick={onSubmitClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
  };
};

export default connect(mapStateToProps, { addItem, deleteItem })(App);

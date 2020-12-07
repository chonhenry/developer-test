import { ADD_ITEM, DELETE_ITEM } from "./actions";

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // add the new item to wish list
      return {
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM:
      // remove an item from wish list
      return {
        wishList: state.wishList.filter((item) => item !== action.payload),
      };
    default:
      return {
        wishList: [...state.wishList],
      };
  }
};

export default reducer;

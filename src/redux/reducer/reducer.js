const initialState = {
  carts: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state, action.payload]
      };

    default:
      return state;
  }
};

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cart/addItem':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(newItems));
      return { ...state, items: newItems };

    case 'cart/updateQuantity': {
      const { id, newQuantity } = action.payload;

      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };
    }

    case 'cart/removeItem':
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};


export default cartReducer;

export const addItemToCart = (product) => {
  return {
    type: 'cart/addItem',
    payload: product,
  };
};

export const loadCart = (cartItems) => {
  return {
    type: 'cart/loadCart',
    payload: cartItems,
  };
};

export const updateQuantity = (id, newQuantity) => {
  return {
    type: 'cart/updateQuantity',
    payload: { id, newQuantity },
  };
};

export const removeItem = (id) => {
  return {
    type: 'cart/removeItem',
    payload: { id },
  };
};
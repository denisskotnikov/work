import React, {useState} from 'react';
import styles from './CartPage.module.css';
import {CartList} from "../components/CartList";
import {OrderForm} from "../components/OrderForm";
import {EmptyCart} from "../components/EmptyCart";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, updateQuantity} from "../redux/cart/cartActions";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
  console.log("newQuantity", newQuantity);
    dispatch(updateQuantity(id, newQuantity));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartMain}>
        <div className={styles.cartHeader}>
          <h1 className={styles.pageTitle}>Shopping cart</h1>
          <div className={styles.backButton}>
            <div className={styles.divider}/>
            <button
              className={styles.navigationButton}
              onClick={() => window.history.back()}
              aria-label="Return to store"
            >
              Back to the store
            </button>
          </div>
        </div>
        {calculateTotal() > 0 ? (<div className={styles.cartContent}>
          <CartList
            items={cartItems}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
          <OrderForm
            itemCount={cartItems.length}
            total={calculateTotal()}
          />
        </div>) : (<EmptyCart/>)}
      </div>
    </div>
  );
};

export default CartPage;
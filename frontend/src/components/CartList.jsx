import React from 'react';
import styles from './CartList.module.css';
import {CartItem} from "./CartItem";

export const CartList = ({ items, onQuantityChange, onRemoveItem }) => {
  return (
    <div className={styles.cartList}>
      {items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onQuantityChange={onQuantityChange}
          onRemove={() => onRemoveItem(item.id)}
        />
      ))}
    </div>
  );
};
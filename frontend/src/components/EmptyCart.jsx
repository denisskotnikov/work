import React from 'react';
import styles from './EmptyCart.module.css';
import {CartItem} from "./CartItem";
import {useNavigate} from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.emptyCart}>
      <p>Looks like you have no items in your basket currently</p>
      <button
        type="submit"
        className={styles.submitButton}
        onClick={handleClick}
      >
        Continue Shopping
      </button>
    </div>
  );
};
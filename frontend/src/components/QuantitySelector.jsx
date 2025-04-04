import React, { useState } from 'react';
import styles from './QuantitySelector.module.css';

export const QuantitySelector = ({
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 99,
  onQuantityChange
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > minQuantity) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= minQuantity && value <= maxQuantity) {
      setQuantity(value);
      onQuantityChange?.(value);
    }
  };

  const handleBlur = () => {
    if (isNaN(quantity) || quantity < minQuantity) {
      setQuantity(minQuantity);
      onQuantityChange?.(minQuantity);
    } else if (quantity > maxQuantity) {
      setQuantity(maxQuantity);
      onQuantityChange?.(maxQuantity);
    }
  };

  return (
    <div className={styles.quantityContainer}>
      <button
        type="button"
        className={styles.quantityButton}
        onClick={handleDecrease}
        disabled={quantity <= minQuantity}
        aria-label="Decrease quantity"
      >
        <img
          src="/images/minus.svg"
          alt=""
          className={styles.quantityIcon}
          aria-hidden="true"
        />
      </button>

      <div className={styles.quantityDisplay}>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          onBlur={handleBlur}
          min={minQuantity}
          max={maxQuantity}
          className={styles.quantityInput}
          aria-label="Product quantity"
        />
      </div>

      <button
        type="button"
        className={styles.quantityButton}
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity}
        aria-label="Increase quantity"
      >
        <img
          src="/images/plus.svg"
          alt=""
          className={styles.quantityIcon}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};
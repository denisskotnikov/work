import React from 'react';
import styles from './CartItem.module.css';
import BASE_URL from "../config";

export const CartItem = ({
  id,
  image,
  title,
  price,
  oldPrice,
  quantity,
  onQuantityChange,
  onRemove
}) => {
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
  const newQuantity = quantity + 1;
  console.log("Increasing to:", newQuantity);
  onQuantityChange(id, newQuantity); // передаем новое значение
  };

  return (
    <article className={styles.cartItem}>
      <img
        src={BASE_URL + image}
        alt={title}
        className={styles.productImage}
      />
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <h2 className={styles.itemTitle}>{title}</h2>
          <button
            className={styles.removeButton}
            onClick={onRemove}
            aria-label={`Remove ${title} from cart`}
          >
            <img
              src="/images/close.svg"
              alt=""
              className={styles.removeIcon}
            />
          </button>
        </div>
        <div className={styles.priceQuantity}>
          <div className={styles.quantityControls}>
            <button
              className={styles.quantityButton}
              onClick={handleQuantityDecrease}
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              <img
                src="/images/minus.svg"
                alt=""
                className={styles.quantityIcon}
              />
            </button>
            <span className={styles.quantityValue} aria-label="Quantity">
              {quantity}
            </span>
            <button
              className={styles.quantityButton}
              onClick={handleQuantityIncrease}
              aria-label="Increase quantity"
            >
              <img
                src="/images/plus.svg"
                alt=""
                className={styles.quantityIcon}
              />
            </button>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>${price}</span>
            {oldPrice && (
              <span className={styles.oldPrice} aria-label="Original price">
                ${oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
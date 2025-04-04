import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';
import BASE_URL from '../config';

export const ProductCard = ({ id, image, title, price, discont_price, onAddToCart }) => {
  const navigate = useNavigate();
  const hasDiscount = discont_price !== null && discont_price < price;
  const discountPercentage = hasDiscount 
    ? Math.round(100 - (discont_price * 100 / price))
    : 0;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    onAddToCart({ id, image, title, price, discont_price });
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick} role="button">
      <div style={{position: 'relative'}}>
        <img
          loading="lazy"
          src={`${BASE_URL}${image}`}
          alt={title}
          className={styles.productImage}
        />
        {hasDiscount && <span className={styles.saleTag}>-{discountPercentage}%</span>}
      </div>
      
      <div className={styles.productContent}>
        <button className={styles.addToCartButton} onClick={handleAddToCartClick}>Add to cart</button>
        <div className={styles.productTitle}>{title}</div>
        
        <div className={styles.priceContainer}>
          {hasDiscount ? (
            <div className={styles.discountContainer}>
              <span className={styles.discountPrice}>${discont_price}</span>
              <span className={styles.oldPrice}>${price}</span>
            </div>
          ) : (
            <span className={styles.normalPrice}>${price}</span>
          )}
        </div>      
      </div>
    </div>
  );
};
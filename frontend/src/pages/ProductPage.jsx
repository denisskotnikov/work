import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QuantitySelector } from "../components/QuantitySelector";
import { ProductGallery } from "../components/ProductGallery";
import { fetchProduct } from "../redux/products/productsActions";
import { addItemToCart } from "../redux/cart/cartActions";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.item);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  const hasDiscount = product.discont_price && product.discont_price < product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(100 - (product.discont_price * 100 / product.price))
    : 0;

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }));
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.mainContent}>
        <div className={styles.productSection}>
          {product && <ProductGallery images={[product.image]} />}
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.priceContainer}>
              <div className={styles.prices}>
                {hasDiscount ? (
                  <>
                    <span className={styles.discountPrice}>${product.discont_price}</span>
                    <div className={styles.originalPriceWrapper}>
                      <span className={styles.originalPrice}>${product.price}</span>
                      <span className={styles.saleTag}>-{discountPercentage}%</span>
                    </div>
                  </>
                ) : (
                  <span className={styles.normalPrice}>${product.price}</span>
                )}
              </div>
            </div>
            <div className={styles.addToCartSection}>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              <button className={styles.addToCartButton} onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
            <div className={styles.productDescription}>
              <h2 className={styles.descriptionTitle}>Description</h2>
              <p className={styles.descriptionText}>{product.description}</p>
              <button className={styles.readMoreButton}>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
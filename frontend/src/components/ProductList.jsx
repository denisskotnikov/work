import React, {useEffect, useState} from 'react';
import styles from './ProductList.module.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/products/productsActions";
import {ProductCard} from "./ProductCard";
import {useLocation, useParams} from "react-router-dom";
import {addItemToCart} from "../redux/cart/cartActions";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const { category } = useParams();

  const [isDiscounted, setIsDiscounted] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/all-sales') {
      setIsDiscounted(true);
    }
  }, [location]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredByCategory = products.filter((product) => {
    return !(category && product.categoryId !== parseInt(category));
  });

  const filteredProducts = filteredByCategory.filter((product) => {
    const isWithinPriceRange = (
      (minPrice === '' || product.price >= minPrice) &&
      (maxPrice === '' || product.price <= maxPrice)
    );
    const isDiscountedProduct = !isDiscounted || product.discont_price > 0;
    return isWithinPriceRange && isDiscountedProduct;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'price-desc':
        return b.price - a.price;
      case 'price-asc':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.pageTitle}>All products</h2>
      <div className={styles.filterSection}>
        <div className={styles.priceFilter}>
          <span className={styles.filterLabel}>Price</span>
          <input
            type="number"
            className={styles.filterButton}
            placeholder="from"
            aria-label="Minimum price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            className={styles.filterButton}
            placeholder="to"
            aria-label="Maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className={styles.discountFilter}>
          <span className={styles.filterLabel}>Discounted items</span>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isDiscounted}
            onChange={(e) => setIsDiscounted(e.target.checked)}
            aria-label="Show discounted items only"
          />
        </div>

        <div className={styles.sortFilter}>
          <span className={styles.filterLabel}>Sorted</span>
          <select
            className={styles.sortButton}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            aria-label="Sort products"
          >
            <option value="default">by default</option>
            <option value="newest">newest</option>
            <option value="price-desc">price: high-low</option>
            <option value="price-asc">price: low-high</option>
          </select>
        </div>
      </div>

      <div className={styles.productGrid}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;

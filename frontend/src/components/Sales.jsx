import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import styles from './Sales.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productsActions";
import BASE_URL from '../config';

function Sales() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);

  const [salesItems, setSalesItems] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const discountedItems = products.filter(product => product.discont_price > 0);
    setSalesItems(discountedItems.slice(0, 4));
  }, [products]);

  const handleNavigation = () => {
    navigate('/all-sales');
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>
        <div className={styles.btnGroup}>
          <div className={styles.divider} />
          <button className={styles.navigation} onClick={handleNavigation}>All sales</button>
        </div>
      </div>
      <div className={styles.list}>
        {salesItems.map((item) => {
          const discountPercent = Math.round(100 - (item.discont_price / item.price) * 100);
          return (
            <div key={item.id} className={styles.item}>
              <Link to={`/product/${item.id}`} className={styles.link}>
                <img 
                  src={`${BASE_URL}${item.image}`} 
                  alt={item.title} 
                  className={styles.image} 
                  onError={(e) => {
                    e.target.src = 'placeholder.jpg';
                  }}
                />
                <div className={styles.discountBadge}>
                  -{discountPercent}%
                </div>
                <div className={styles.text}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>${item.discont_price}</span>
                    <span className={styles.originalPrice}>${item.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sales;
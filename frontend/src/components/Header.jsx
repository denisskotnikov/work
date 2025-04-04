import React from 'react';
import { useNavigate, Link } from "react-router-dom"; // Добавлен Link
import { useSelector } from "react-redux";
import styles from './Header.module.css';

function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleMainClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.logoBadge}
        onClick={handleMainClick}
        role="button"
      >
        <img src="/images/logo.svg" alt="" className={styles.logo}/>
      </div>

      <nav className={styles.navLinks} aria-label="Main Navigation">
        <Link to="/">Main Page</Link>
        <Link to="/categoriesPage">Categories</Link>
        <Link to="/products">All products</Link>
        <Link to="/all-sales">All sales</Link>
      </nav>
      
      <div
        className={styles.cartBadge}
        onClick={handleCartClick}
        role="button"
        aria-label={`Shopping cart with ${cartCount} items`}
      >
        <img
          src="/images/cart.svg"
          alt=""
          className={styles.cartIcon}
        />
        {cartCount > 0 && (<span className={styles.badgeCount}>{cartCount}</span>)}
      </div>
    </header>
  );
}

export default Header;
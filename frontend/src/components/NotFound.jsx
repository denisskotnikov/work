import React from 'react';
import styles from './NotFound.module.css';
import {useNavigate} from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className={styles.errorSection}>
      <div className={styles.imageContainer}>
        <img
          loading="lazy"
          src="/images/notfound.svg"
          className={styles.leftDecoration}
          alt=""
        />
        <img
          loading="lazy"
          src="/images/notfound2.png"
          className={styles.errorImage}
          alt="404 Error Illustration"
        />
        <img
          loading="lazy"
          src="/images/notfound.svg"
          className={styles.rightDecoration}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            We're sorry, the page you requested could not be found.
            <br />
            Please go back to the homepage.
          </p>
        </div>
        <button className={styles.homeButton} onClick={handleClick} tabIndex="0">Go Home</button>
      </div>
    </section>
  );
}

export default NotFound;
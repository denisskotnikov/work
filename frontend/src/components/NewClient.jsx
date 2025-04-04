import React from 'react';
import styles from './NewClient.module.css';

function NewClient() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>5% off on the first order</h2>
      <div className={styles.content}>
        <img src="/images/discount.png" alt="" className={styles.image} />
        <form className={styles.form} aria-label="Discount">
          <div className={styles.inputGroup}>
            <input type="text" id="nameInput" className={styles.input} placeholder="Name" aria-label="Name" />
            <input type="text" id="phoneInput" className={styles.input} placeholder="Phone number" aria-label="Phone number" />
            <input type="email" id="emailInput" className={styles.input} placeholder="Email" aria-label="Email" />
          </div>
          <button type="submit" className={styles.button}>Get a discount</button>
        </form>
      </div>
    </section>
  );
}

export default NewClient;
import React, { useState } from 'react';
import styles from './OrderForm.module.css';

export const OrderForm = ({ itemCount, total }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={styles.orderForm}
      onSubmit={handleSubmit}
      aria-label="Order form"
    >
      <div className={styles.orderSummary}>
        <h2 className={styles.orderTitle}>Order details</h2>
        <div className={styles.orderDetails}>
          <p className={styles.itemCount}>
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </p>
          <div className={styles.totalPrice}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalAmount}>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.formInputs}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.visuallyHidden}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Name"
            required
            aria-required="true"
          />

          <label htmlFor="phone" className={styles.visuallyHidden}>
            Phone number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Phone number"
            required
            aria-required="true"
            pattern="[0-9]{10,}"
          />

          <label htmlFor="email" className={styles.visuallyHidden}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.formInput}
            placeholder="Email"
            required
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          aria-label="Place order"
        >
          Order
        </button>
      </div>
    </form>
  );
};
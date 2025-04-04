import React from 'react';
import styles from './SalesPage.module.css';
import ProductList from "../components/ProductList";

const SalesPage = () => {

    return (
        <div className={styles.categoriesPage}>
            <ProductList/>
        </div>
    );
};

export default SalesPage;

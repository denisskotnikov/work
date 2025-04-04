import React from 'react';
import styles from './ProductsPage.module.css';
import ProductList from "../components/ProductList";

const ProductsPage = () => {

    return (
        <div className={styles.categoriesPage}>
            <ProductList/>
        </div>
    );
};

export default ProductsPage;

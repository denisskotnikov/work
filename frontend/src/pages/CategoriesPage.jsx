import React from 'react';
import styles from './CategoriesPage.module.css';
import CategoryList from "../components/CategoryList";

const CategoriesPage = () => {

    return (
        <div className={styles.categoriesPage}>
            <CategoryList/>
        </div>
    );
};

export default CategoriesPage;

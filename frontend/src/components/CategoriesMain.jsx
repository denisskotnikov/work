import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './CategoriesMain.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/categories/categoriesActions";
import BASE_URL from "../config";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log('Categories:', categories);
  console.log('Loading:', loading);
  console.log('Error:', error);

  if (loading) {
    return <p className={styles.loading}>Загрузка категорий...</p>;
  }

  if (error) {
    return <p className={styles.error}>Ошибка загрузки категорий: {error}</p>;
  }

  if (!categories || categories.length === 0) {
    return <p className={styles.noCategories}>Категории не найдены!</p>;
  }

  const displayedCategories = categories.slice(0, 4);

  const handleNavigation = () => {
    navigate('/categoriesPage');
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.btnGroup}>
          <div className={styles.divider} />
          <button className={styles.navigation} onClick={handleNavigation}>
            All categories
          </button>
        </div>
      </div>
      <div className={styles.list}>
        {displayedCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className={styles.categoryLink}
          >
            <div className={styles.category}>
              <img src={BASE_URL + category.image} alt={category.title} className={styles.image} />
              <div className={styles.label}>{category.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;

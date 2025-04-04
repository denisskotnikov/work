import React from 'react';
import styles from './MainPage.module.css';
import Banner from '../components/Banner.jsx';
import CategoriesMain from '../components/CategoriesMain.jsx';
import NewClient from '../components/NewClient.jsx';
import Sales from '../components/Sales.jsx';

function MainPage() {
  return (
    <div className={styles.mainDiv}>
      <Banner />
      <CategoriesMain />	
      <NewClient />
      <Sales />

    </div>
  );
}

export default MainPage;
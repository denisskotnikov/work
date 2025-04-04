import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <img 
        src="/images/banner.jpg" 
        alt="" 
        className={styles.bannerImage}
      />
    </div>
  );
}

export default Banner;
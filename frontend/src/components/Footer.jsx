import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>Contact</h1>
      <div className={styles.row1}>
        <div className={styles.div1}>
          <p className={styles.contact1}>Phone</p>
          <p className={styles.contact2}>+7(499)350-66-04</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.contact1}>Socials</p>
          <div className={styles.socialIcons}>
            <img src="/images/instagram.svg" alt="Instagram" className={styles.socImage} />
            <img src="/images/phone.svg" alt="Phone" className={styles.socImage} />
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.div1}>
          <p className={styles.contact1}>Adress</p>
          <p className={styles.contact2}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.contact1}>Working Hours</p>
          <p className={styles.contact2}>24 hour a day</p>
        </div>
      </div>
	  
      <iframe 
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab4b7e668d2d1e6a1248016745d75b9cd5658c71a7aafe573b2af03976d2540af&amp;source=constructor" 
        width="100%" 
        height="350" 
        frameBorder="1"
        title="Location map"
      ></iframe>
    </footer>
  );
};

export default Footer;
import React from 'react'

import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

import facebook from './facebook.png'

import instagram from './instagram.png'

import linkedin from './linkedin.png'

import telegram from './telegram.jpg'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.cont}>
        <div className={styles.leftSideFooter}>
          <div className={styles.logo}>
            <Link to="/">
            <img src="https://www.freeiconspng.com/thumbs/education-png/education-png-10.png" alt="https://www.freeiconspng.com/thumbs/education-png/education-png-10.png" width={135} />
            <h2>My — Education</h2></Link>
          </div>
        </div>
        <div className={styles.centerSideFooter}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Education</Link>
            </li>
            <li>
              <Link to="/main">Teachers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightSideFooter}>
          <h3>Social networks</h3>
          <ul>
            <li><a className={styles.facebook} href="https://www.facebook.com/Coca-Cola/" rel="noreferrer" target='_blank'>
                <img width={40} src={facebook} alt={facebook} />
              </a></li>
            <li><a className={styles.instagram} href="https://www.instagram.com/cocacola_uzbekistan/?hl=ru" rel="noreferrer" target='_blank'>
                <img src={instagram} alt={facebook} width={40} />
              </a></li>
            <li><a className={styles.linkedin} href="https://www.linkedin.com/company/the-coca-cola-company" rel="noreferrer" target='_blank'>
                <img src={linkedin} width={40} alt={linkedin} />
              </a></li>
            <li><a className={styles.telegram} href="https://telegram.me/s/Coca_Cola_Uzbekistan?before=102" rel="noreferrer" target='_blank'>
                <img src={telegram} width={40} alt={telegram} />
              </a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

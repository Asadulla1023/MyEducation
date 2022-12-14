import React, { useState } from 'react'

import { Link } from 'react-router-dom'


import styles from './Navigation.module.css'
import { Search } from './Search'

const Navigation = () => {
  const [modalOpen, setOpenModal] = useState(false)
  const [nav, setNav] = useState(false)

  const changeBgHandler = () => {
    if (window.scrollY >= 14.41) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBgHandler)



  const [rotate, setRotate] = useState(false)

  rotate ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  const modalOpenHandler = () => {
    setOpenModal(true)
    setRotate(!rotate)
  }

  return (
    <div className={nav ? styles.navbarContentActive : styles.navbarContent}>
      <ul className={styles.navbarUl}>
        <li className={styles.navbarLi}><Link className={styles.navigators} to="/"><img src="https://www.freeiconspng.com/thumbs/education-png/education-png-10.png" width="140px" alt="" className={styles.logoImg} /><p>My — Education</p></Link></li>
        <li><Link className={styles.navigators} to="/">Home</Link></li>
        <li><Link className={styles.navigators} to="/about">Education</Link></li>
        <li><Link className={styles.navigators} to="/main">Teachers</Link></li>
        <li><Link className={styles.navigators} to="/contact">Contact Us</Link></li>
        <li className={styles.regionSelector}><button onClick={
          modalOpenHandler
        } className={styles.searchRegion} type='button'>Your direction</button>
          {modalOpen && <Search setOpenModal={setOpenModal} setRotate={setRotate} />}
        </li>
      </ul>
    </div>
  )
}

export default Navigation
import React from 'react'

import styles from './LeftSide.module.css'


import { ADDS } from '../../Constants/Adds'

export const RightSide = () => {
  return (
    <div className={styles.homeRight}>
      <div className={styles.leftside}>
        <div className={styles.adds}>
          {ADDS.map(({ proff, loc, id, about, top }) => (
            <div className={styles.card} key={id}>
              <div className={styles.cont}>
                <div className={styles.top}>
                  <h3>{proff}</h3>
                  <p>{loc} / top {top}</p>
                </div>
                <div className={styles.aboutSection}>
                  <p>{about}</p>
                  <button type='button'>Join course</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

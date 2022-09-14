import React from 'react'

import styles from './LeftSide.module.css'

import { ADDS } from '../../Constants/Adds'

export const LeftSide = ({ props }) => {
    return (
        <div className={styles.leftside}>
            <div className={styles.adds}>
                {ADDS.map(({ proff, loc, id, about, educ }) => (
                    <div className={styles.card} key={id}>
                        <div className={styles.cont}>
                            <div className={styles.top}>
                                <h3>{proff}</h3>
                                <p>{loc} / {educ}</p>
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
    )
}

import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from '../AdsFoot/AdsFoot.module.css'

import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { ADDS } from '../../Constants/Adds';


export const Carousel = () => {
    return (
        <ReactCarousel centerSlidePercentage={33} width="90%" centerMode autoPlay={true} interval={2000} infiniteLoop>
            {ADDS.map(({ proff, loc, id, about, educ }) => (
                <div className={styles.Adscard} key={id}>
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
        </ReactCarousel>
    )
}

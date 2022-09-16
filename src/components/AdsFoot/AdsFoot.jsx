import { ADDS } from '../../Constants/Adds'


import styles from './AdsFoot.module.css'


export const AdsFoot = () => {
    return (
        <div className={styles.AdsFoot}>
            <div className={styles.AdsWrapper}>
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
            </div>
        </div>
    )
}

import React from 'react'

import styles from './Home.module.css'

import Ba from './Ba.jfif'

import { EDUC } from '../../../Constants/Educs'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeCenter}>
        <div className={styles.educCard}>
          <div className={styles.meaningOfHead}>
            <div className={styles.logoOfEducation}>
              <img src={Ba} alt={Ba} className={styles.Ba} />
              <h2>Bobir Akilkhanov tech academy</h2>
            </div>
          </div>
          <div className={styles.aboutSectOfHome}>
            <p className={styles.aboutSection}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptas rerum maxime ducimus unde. Ad accusantium ratione eius tempore, blanditiis est amet odio reiciendis eos praesentium quidem? Quibusdam, deleniti molestiae a quos saepe minus suscipit quaerat quidem in pariatur libero nam modi quo ea ipsam, repudiandae vel debitis delectus totam!
              <Link to="/about" target="_blank"> More about</Link></p>
          </div>
          <div className={styles.selectYourC}>
            <button type='button'>Join Course</button>
          </div>
        </div>
        {EDUC.map(({ img, title, about, id }) => (
          <div className={styles.educCard} key={id}>
            <div className={styles.meaningOfHead}>
              <div className={styles.logoOfEducation}>
                <img src={img} alt={Ba} className={styles.Ba} />
                <h2>{title}</h2>
              </div>
            </div>
            <div className={styles.aboutSectOfHome}>
              <p className={styles.aboutSection}>{about}
                <Link to="/about" target="_blank"> More about</Link></p>
            </div>
            <div className={styles.selectYourC}>
              <button type='button'>Join Course</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.learnMore}>
          <h3><Link to="/about">See more!!!</Link></h3>
      </div>
    </div>
  )
}

export default Home
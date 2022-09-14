import React from 'react'

import styles from './Home.module.css'

import Ba from './Ba.jfif'

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeCenter}>
        <div className={styles.meaningOfHead}>
          <div className={styles.logoOfEducation}>
            <img src={Ba} alt={Ba} className={styles.Ba} />
            <p>——</p>
            <h2>Bobir Akilkhanov tech academy</h2>
          </div>
        </div>
        <div className={styles.aboutSectOfHome}>
          <p className={styles.aboutSection}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque laudantium ipsa. Molestias laborum possimus laudantium aliquam iusto magnam distinctio tenetur voluptas libero cupiditate quisquam id recusandae magni iste vero quae natus dolore, suscipit minima amet quia. Corrupti, et dignissimos. Assumenda obcaecati ratione necessitatibus, qui cupiditate ad nulla, culpa eligendi quo molestias soluta modi commodi explicabo amet delectus mollitia recusandae tempore saepe distinctio tenetur eveniet aliquid. Quas facere iusto minima quod reiciendis, debitis deleniti sunt inventore magni possimus, quaerat deserunt modi quos quisquam unde perferendis reprehenderit? Necessitatibus delectus neque aspernatur quas dolores? Sunt veritatis repellat ullam magnam quasi fugiat eos.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
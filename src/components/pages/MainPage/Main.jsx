import React from 'react'
import { useState } from 'react'

const Main = () => {
  const [aboutUser, setAboutUser] = useState(false)
  const eded = () => {
    setAboutUser(true)
  }
  const addSentence = () => {
    // aboutUser ? <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, modi?</p> : null
  }
  const ddd = () => {
    setAboutUser(false)
  }

  const text = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim, explicabo sit reiciendis eum, eos facilis expedita asperiores laudantium dolorem porro? Recusandae, reiciendis. Optio, accusantium quas voluptatibus ducimus at unde facilis? Voluptatibus iste ullam perferendis magnam quod maxime, nulla nesciunt, similique, nam rem porro nisi enim sed sint commodi. Atque neque nemo ut quo a odio temporibus. Voluptatibus sed tempore, cumque ad quasi expedita quam? Magnam aliquam aspernatur consectetur saepe ab est, nostrum, perferendis officiis harum corrupti sequi incidunt. Veritatis, repudiandae. Fuga modi ea incidunt expedita vel maiores, perspiciatis doloribus alias praesentium sunt distinctio aut dolores voluptate et. Aperiam, doloremque!</p>
  return (
    <>
      <div>
        <button onMouseOver={eded} onMouseLeave={ddd}>
          onMouseOver
        </button>
        {aboutUser ? text : null}
      </div>
    </>
  )
}

export default Main
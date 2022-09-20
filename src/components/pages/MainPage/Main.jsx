import React from 'react'
import { useState } from 'react'

const Main = () => {
  const [aboutUser, setAboutUser] = useState(false)
  const eded = () => {
    setAboutUser(<p>wqd</p>)
  }
  return (
    <div>
      <button onClick={eded}>
        click
      </button>
      {aboutUser ? <p>Hello</p>: ""}
    </div> 
  )
}

export default Main
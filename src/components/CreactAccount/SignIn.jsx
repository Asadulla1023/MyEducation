import { useRef } from 'react';

import './signIn.css'

export const SignIn = ({ setSignIn, nameUser }) => {

  const nameRef = useRef("")


  const passRef = useRef("")


  const clearInputHandler = () => {
    passRef.current.value = ""
    nameRef.current.value = ""
  }


  const addUser = () => {
    const name = nameRef.current.value
    const pass = passRef.current.value
    if (name === "" || pass === "") {
      alert("Please fill in the blanks");
    }
    else {
      localStorage.setItem(name, `pass: ${pass}`)
      nameUser = nameRef.current.value
      document.body.style.overflow = "auto"
      clearInputHandler()
      setSignIn(false)
    }
  }


  return (
    <div className="hh">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <h1>Your Name and Password</h1>
          </div>
          <form action="/" className="body">
            <div className="asking">
              <p className="about">Your name</p>
              <input type="text" ref={nameRef} placeholder="Your name" required />
              <p className="about">Your password</p>
              <input type="password" minLength="4" ref={passRef} placeholder="Your password" required />
              <button onClick={() => {
                addUser()
              }} type="button">Add account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
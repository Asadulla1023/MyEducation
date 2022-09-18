import { useRef } from "react";

import "./signIn.css";

export const SignIn = ({ setSignIn, setIsAuth, setBtnValue }) => {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const locationRef = useRef(null)

  const clearInputHandler = () => {
    passRef.current.value = "";
    nameRef.current.value = "";
  };

  const addUser = () => {
    const username = nameRef.current.value;
    const pass = passRef.current.value;
    const location = locationRef.current.value
    if (username.trim() === "" && pass.trim() === "" && location.trim() === "") {
      alert("Please fill in the blanks");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", pass);
      localStorage.setItem("location", location)
      clearInputHandler();
      setSignIn(false);
      setIsAuth(true);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="hh">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <h1>Who are you?</h1>
          </div>
          <form action="/" className="body">
            <div className="asking">
              <p className="about">Your name</p>
              <input
                type="text"
                ref={nameRef}
                placeholder="Your name"
                required
              />
              <p className="about">Your password</p>
              <input
                type="password"
                minLength="4"
                ref={passRef}
                placeholder="Your password"
                required
              />
              <p className="about">Your region</p>
              <input type="text" ref={locationRef} placeholder="Where are you from"/>
              <button
                onClick={() => {
                  addUser();
                }}
                type="button"
              >
                Add account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

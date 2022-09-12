import React, { useRef } from "react";
import "./Search.css";

// import { Animated } from "react-animated-css";

// import close from './close.png'

export function Search({ setOpenModal, setRotate }) {

    const regionRef = useRef("");
    const profRef = useRef("");

    const addRegion = () => {
        const region = regionRef.current.value;
        const prof = profRef.current.value;

        if (region === "" || prof === "") {
            alert("Please fill in the blanks")
        }
        else {
            localStorage.setItem("region: " + region, "proff: " + prof)
        }
    }

    return (
        <div className="wie">
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                                setRotate(false)
                            }}
                        >
                            {/* <img src={close} alt={close} /> */}
                            X
                        </button>
                    </div>
                    <div className="title">
                        <h1>Select your Region and Profession</h1>
                    </div>
                    <form action="/" className="body">
                        <div className="asking">
                            <p className="about">Your region</p>
                            <input type="text" ref={regionRef} placeholder="example: Tashkent" required />
                            <p className="about">Your profession</p>
                            <input type="text" ref={profRef} placeholder="example: IT" required />
                            <button onClick={() => {
                                setOpenModal(false);
                                setRotate(false)
                                addRegion()
                            }} type="button">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
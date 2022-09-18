import React, { useRef } from "react";
import { ADDS } from "../../../Constants/Adds";
import "./Search.css";

// import { Animated } from "react-animated-css";

// import close from './close.png'

export function Search({ setOpenModal, setRotate }) {
    console.log(ADDS)
    const regionRef = useRef("");
    const profRef = useRef("");

    const addRegion = () => {
        const region = regionRef.current.value;
        const prof = profRef.current.value;

        const clearInputs = () => {
            regionRef.current.value = ""
            profRef.current.value = ""
        }

        ADDS.forEach(e => {
            if (e.loc !== region || e.proff !== prof) {
                console.log(e)
                clearInputs()
            }
            else {
                alert("Saved")
                localStorage.setItem("region", region)
                localStorage.setItem("proff", prof)
                setOpenModal(false);
                setRotate(false)
            }
        })

        // ADDS.filter(
        //     loc => {
        //         if (loc === ADDS.loc) {
        //             console.log('hi')
        //             clearInputs()
        //         }
        //         else {
        //             console.log("no")
        //         }
        //     }
        // )
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
                            <p className="about">Type region</p>
                            <input type="text" ref={regionRef} placeholder="example: Tashkent" required />
                            <p className="about">Type your profession</p>
                            <input type="text" ref={profRef} placeholder="example: IT" required />
                            <button onClick={addRegion} type="button">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
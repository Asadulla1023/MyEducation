import React, { useState } from 'react'

import { SignIn } from './SignIn'

import './signIn.css'

import avatar from './userAvatar.png'

export const AccAndSign = () => {
    const [signIn, setSignIn] = useState(false)

    const signInOpener = () => {
        setSignIn(true)
        // document.body.children[1].firstChild.st
    }
    return (
        <div className='wqd'>
            <div className="efwf">
                <div>
                    <img src={avatar} alt={avatar} width="74px" />
                    <h3>hello</h3>
                </div>
                <div className="signIn"><button className='signInBtn' onClick={
                    signInOpener
                } type='button'>Sign in
                </button>
                </div>
            </div>
            {signIn && <SignIn setSignIn={setSignIn} />}
        </div>
    )
}

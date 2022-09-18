import { Routes, Route } from 'react-router-dom'

import React from 'react';
import Contact from './components/pages/Contact/Contact';

import Home from './components/pages/HomePage/Home';

import Main from './components/pages/MainPage/Main';

import About from './components/pages/AboutPage/About';

import Navigation from './components/pages/Navigation/Navigation';



import './styles/global.css'
import { AccAndSign } from './components/CreactAccount/AccAndSign';
import { LeftSide, RightSide } from './components/LeftSide';

import { Carousel } from './components'
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <>
      <div className="App">
        <div className="cont">
          <Navigation />
          <div className="sectionSignIn">
            <div className="account">
              <AccAndSign />
            </div>
            <div className="routers">
              <div className="leftSide">
                  <LeftSide />
              </div>
              <div className="Center">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/main' element={<Main />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='*' element={<Home />} />
                </Routes>
              </div>
              <div className="rightSide">
                <RightSide/>
              </div>
            </div>
          <Carousel/>
          <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
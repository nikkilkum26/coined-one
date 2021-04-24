import React from 'react'
import './HomeScreen.css'
import Header from '../Components/Header'
import Activities from '../Components/Activities'
const homescreen = () => {
    return (
        <div className="main">
          <Header/>
         
          <Activities/>
        </div>
    )
}

export default homescreen

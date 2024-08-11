import React from 'react'
import Navbar from '..//Navbar/Navbar'
import HomeHeader from '../HomeHeader/HomeHeader'
import "./Home.css"
import HomeBanner from '../HomeBanner/HomeBanner'
import Slider from '../Slider/Slider'
import HomeDescription from '../HomeDescription/HomeDescription'
import HomeFooter from '../Slider/HomeFooter'

const Home = () => {
  return (
  <>
  <div className="home-container">
<Navbar/>
<HomeHeader/>
<HomeBanner/>
<div className="slider-home-container">
<Slider/>
</div>
<div className="home-description-container">
<HomeDescription/>
</div>
<div className="home-footer-parent-container">
<HomeFooter/>
</div>
</div>
  </>
  )
}

export default Home

import React from 'react'
import Navbar from '..//Navbar/Navbar'
import HomeHeader from '../HomeHeader/HomeHeader'
import "./Home.css"
import HomeBanner from '../HomeBanner/HomeBanner'
import Slider from '../Slider/Slider'
import Slider2 from '../Slider/Slider2'
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
<Slider2 title={"Best of Electronics"}/>
<Slider2 title={"Best Seller"}/>
<Slider2 title={"Top Items"}/>
<Slider2 title={"Explore New Styles"}/>
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

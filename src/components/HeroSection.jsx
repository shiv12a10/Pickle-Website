import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <section className="left-main">
        <div className="left-top">
          <span>Purity</span>
          <span>Guaranteed</span>
        </div>
        <div className="left-bottom">
          <span>Taste the ❤️ of Traditional Homemade Indian Pickles</span>
        </div>
      </section>
      <section className="middle">
        <div className="container">
          <div className="center">
            <div className="center-logo">
            </div>
            <div className="overlay"></div>
          </div>
          <div className="orbit">
            <div className="moon amla top-left"></div>
            <div className="moon chilli top-right"></div>
            <div className="moon mango bottom-left"></div>
            <div className="moon lemon bottom-right"></div>
          </div>
          <div className="orbit2">
            <div className="moon garlic top-left"></div>
            <div className="moon ginger top-right"></div>
            <div className="moon karanda bottom-left"></div>
            <div className="moon carrot bottom-right"></div>
          </div>
        </div>
      </section>
      <section className="right-main">
        <div className="right-top">
          <span>2k+</span>
          <span className='text2'>Happy Customers</span>
        </div>
        <div className="right-bottom">
          <span>100% Natural</span>
          <span className='text2'>Organic Ingredients</span>
        </div>
      </section>
    </div>
  )
}

export default HeroSection

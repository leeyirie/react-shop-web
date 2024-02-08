import React from 'react'
import ProductsList   from '../../components/ProductsList'
import "./index.css"


export default function index() {
  return (
    <>
    <div className="banner">
      <div className="banner-img">
        <img className="fit-picture" src="Images/2.png" alt="salon" />
      </div>
      <div className="banner-description">
        <p>Our products </p>
      </div>
    </div>
    <ProductsList />
    </>
  )
}

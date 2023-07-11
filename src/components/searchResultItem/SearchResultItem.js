import React from 'react'
import './searchResultItem.css'
import { Link, Navigate } from 'react-router-dom'

export default function SearchResultItem({item}) {
  return (
    <div className="search-result-item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="search-result-img"
      />
      <div className="search-result-item-desc">
        <h1 className="search-result-title">{item.name}</h1>
        <span className="search-result-distance">{item.distance} from center</span>
        <span className="search-result-transport">Free airport taxi</span>
        <span className="search-result-subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="search-result-features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="search-result-cancel">Free cancellation </span>
        <span className="search-result-cancel-subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="search-result-item-details">
        {item.rating?(<div className="search-result-rating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>):<></>}
        <div className="search-result-item-detailtexts">
          <span className="search-result-price">${item.cheapestPrice}</span>
          <span className="search-result-tax">Includes taxes and fees</span>
          <Link to={`http://localhost:3000/hotel/${item._id}`}>
          <button className="search-result-check">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

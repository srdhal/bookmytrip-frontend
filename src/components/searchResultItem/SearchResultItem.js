import React from 'react'
import './searchResultItem.css'

export default function SearchResultItem() {
  return (
    <div className="search-result-item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="search-result-img"
      />
      <div className="search-result-item-desc">
        <h1 className="search-result-title">Tower Street Apartments</h1>
        <span className="search-result-distance">500m from center</span>
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
        <div className="search-result-rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="search-result-item-detailtexts">
          <span className="search-result-price">$112</span>
          <span className="search-result-tax">Includes taxes and fees</span>
          <button className="search-result-check">See availability</button>
        </div>
      </div>
    </div>
  )
}

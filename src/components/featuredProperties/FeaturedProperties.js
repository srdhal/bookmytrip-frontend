import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'


export default function FeaturedProperties() {

  const {data,loading,err}=useFetch("http://localhost:8000/hotels?featured=true&limit=4")
  // console.log(loading)
  return (
    <>
      {loading?("loading !! please wait"):
      (<div className="featured-property">
        {data.map((hotel)=>(
          <div className="featured-property-item" key={hotel._id}>
          <img
            src={hotel.photos.length?hotel.photos[0]:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"}
            alt=""
            className="featured-property-img"
          />
          <span className="featured-property-name">{hotel.name}</span>
          <span className="featured-property-city">{hotel.city}</span>
          <span className="featured-property-price">Starting from ${hotel.cheapestPrice}</span>
          {hotel.rating?(<div className="featured-property-rating">
            <button>{hotel.rating}</button>
            <span>Excellent</span>
          </div>):(<></>)}
        </div>
        ))}

        {/* <div className="featured-property-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="featured-property-img"
          />
          <span className="featured-property-name">Aparthotel Stare Miasto</span>
          <span className="featured-property-city">Madrid</span>
          <span className="featured-property-price">Starting from $120</span>
          <div className="featured-property-rating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featured-property-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="featured-property-img"
          />
          <span className="featured-property-name">Comfort Suites Airport</span>
          <span className="featured-property-city">Austin</span>
          <span className="featured-property-price">Starting from $140</span>
          <div className="featured-property-rating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="featured-property-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="featured-property-img"
          />
          <span className="featured-property-name">Four Seasons Hotel</span>
          <span className="featured-property-city">Lisbon</span>
          <span className="featured-property-price">Starting from $99</span>
          <div className="featured-property-rating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featured-property-item">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="featured-property-img"
          />
          <span className="featured-property-name">Hilton Garden Inn</span>
          <span className="featured-property-city">Berlin</span>
          <span className="featured-property-price">Starting from $105</span>
          <div className="featured-property-rating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div> */}
      </div>)}
    </>
  )
}

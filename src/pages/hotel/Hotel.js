import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import MailingList from '../../components/mailingList/MailingList'


export default function Hotel() {

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const [photoSelected,setPhotoSelected]=useState(0)
  const [photoPanel,setPhotoPanel]=useState(false)

  const handleSelect=(index)=>{
     setPhotoSelected(index)
     setPhotoPanel(true)
  }
  
  const handleSlider=(direction)=>{
      const len=photos.length
      let newSlider
      if(direction==="left"){
        newSlider=(photoSelected+len+1)%len
      }
      else{
        newSlider=(photoSelected+len-1)%len
      }

      setPhotoSelected(newSlider)
  }

  return (
      <div>
        <Navbar/>
        <Header type="checked"/>
        <div className='hotel-container'>
        {photoPanel && 
        <div className='slider'>
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setPhotoPanel(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleSlider("left")}/>
          <div className='slider-wrapper'>
             <img src={photos[photoSelected].src} className='slider-img'/>
          </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleSlider("right")}/>
        </div>}
          <div className='hotel-wrapper'>
            <button className='hotel-button'>Book Now</button>
            <div className='hotel-title'>Taj Hotel</div>
            <div className='hotel-address'>
              <FontAwesomeIcon icon={faLocation}/>
              <span>Elton st 125 new york</span>
            </div>
            <span className='hotel-dist'>
              Excellent location - 500 from center
            </span>
            <span className='hotel-pricehighlight'>
              book a stay over Rs 11000 at this property and get a free airport taxi
            </span>
            <div className='hotel-imgs'>
              {photos.map((p,index)=>(
                <div className='hotel-img-wrapper'>
                  <img src={p.src} onClick={()=>handleSelect(index)} alt='' className='hotel-img'/>
                </div>
              ))}
            </div>
            <div className='hotel-detail'>
              <div className='hotel-detail-text'>
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
              </div>
              <div className='hotel-detail-price'>
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
            <MailingList/>
        </div>
      </div>
  )
}

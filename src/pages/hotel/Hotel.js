import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import MailingList from '../../components/mailingList/MailingList'
import { useLocation, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { useSearch } from '../../contexts/SearchProvider'



export default function Hotel() {
  
  const id=useParams()

  const {data,loading,err}=useFetch(`http://localhost:8000/hotels/${id.id}`)
  // console.log(data)
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

  const {date,counter}=useSearch()
  // console.log(date)
  // console.log(date[0].endDate-date[0].startDate)
  const dayDurationCalc = (date1,date2)=>{
    const timediff=Math.abs(date2.getTime()-date1.getTime())
    const daydiff=Math.ceil(timediff/(1000*60*60*24))
    return daydiff
  } 

  const dayDuration=dayDurationCalc(date[0].startDate,date[0].endDate) 

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
            <div className='hotel-title'>{data.name}</div>
            <div className='hotel-address'>
              <FontAwesomeIcon icon={faLocation}/>
              <span>{data.address}</span>
            </div>
            <span className='hotel-dist'>
              Excellent location - {data.distance}
            </span>
            <span className='hotel-pricehighlight'>
              book a stay over Rs ${data.cheapestPrice} at this property and get a free airport taxi
            </span>
            {data.photos && <div className='hotel-imgs'>
              {
                data.photos.length?
                data.photos.map((p,index)=>(
                <div className='hotel-img-wrapper' key={index}>
                  <img src={p.src} onClick={()=>handleSelect(index)} alt='' className='hotel-img'/>
                </div>
              ))
                :
                photos.map((p,index)=>(
                <div className='hotel-img-wrapper' key={index}>
                  <img src={p.src} onClick={()=>handleSelect(index)} alt='' className='hotel-img'/>
                </div>
              ))}
            </div>}
            <div className='hotel-detail'>
              <div className='hotel-detail-text'>
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
              {data.desc}
              </p>
              </div>
              <div className='hotel-detail-price'>
                <h1>Perfect for a {dayDuration}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${dayDuration*(data.cheapestPrice)*counter.room}</b> ({dayDuration} nights)
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

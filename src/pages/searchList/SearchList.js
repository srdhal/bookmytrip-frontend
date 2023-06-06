import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './searchList.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import SearchResultItem from '../../components/searchResultItem/SearchResultItem'


export default function SearchList() {

  const location=useLocation()
  const [openDatePanel,setOpenDatePanel] =useState(false)
  const [destination,setDestination] =useState(location.state.destination)
  const [openPersonPanel,setOpenPersonPanel] =useState(false)
  const [date,setDate] = useState(location.state.date);
  const [counter,setCounter] = useState(location.state.counter);

  return (
    <div>
      <Navbar/>
      <Header type="checked"/>
      <div className='list-container'>
        <div className='list-wrapper'>
            <div className='list-search'>
              <h1>search</h1>
              <>

              <div className='list-search-item'>
                <label>destination</label>
                <input type='text' placeholder={destination}/>
              </div>
              <div className='list-search-item'>
                <label>date of journey</label>
                <span onClick={()=>{setOpenDatePanel(!openDatePanel)}}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {openDatePanel && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                // className='dropdown'
              />}
              </div>
              <div className='list-search-item'>
                <label>options</label>
                <div className='list-option-item'>
                  <label>min price</label>
                  <input type='number' min={1000} placeholder={1000}/>
                </div>
                <div className='list-option-item'>
                  <label>max price</label>
                  <input type='number' min={1000} placeholder={1000}/>
                </div>
                <div className='list-option-item'>
                  <label>adult</label>
                  <input type='number' min={1} placeholder={counter.adult}/>
                </div>
                <div className='list-option-item'>
                  <label>child</label>
                  <input type='number' min={0} placeholder={counter.child}/>
                </div>
                <div className='list-option-item'>
                  <label>room</label>
                  <input type='number' min={1} placeholder={counter.room}/>
                </div>
              </div>
              </>
              <button className='list-search-button'>search</button>
            </div>
            <div className='list-result'>
              <SearchResultItem/>
              <SearchResultItem/>
              <SearchResultItem/>
              <SearchResultItem/>
              <SearchResultItem/>

            </div>
        </div>
      </div>

    </div>
  )
}

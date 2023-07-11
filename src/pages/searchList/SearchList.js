import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './searchList.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import SearchResultItem from '../../components/searchResultItem/SearchResultItem'
import useFetch from '../../hooks/useFetch'


export default function SearchList() {

  const location=useLocation()
  const [openDatePanel,setOpenDatePanel] =useState(false)
  const [destination,setDestination] =useState(location.state.destination)
  const [openPersonPanel,setOpenPersonPanel] =useState(false)
  const [date,setDate] = useState(location.state.date);
  const [counter,setCounter] = useState(location.state.counter);
  const [min,setMin]=useState(0)
  const [max,setMax]=useState(1000)
  

  const {data,loading,err,refetchData}=useFetch(`http://localhost:8000/hotels?city=${destination}&min=${min}&max=${max}`)

  const handleclick=()=>{
       refetchData()
  }
  
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
                  />}
                  </div>
                  <div className='list-search-item'>
                    <label>options</label>
                    <div className='list-option-item'>
                      <label>min price</label>
                      <input type='number' min={1000} placeholder={1000} onChange={(e)=>setMin(e.target.value)}/>
                    </div>
                    <div className='list-option-item'>
                      <label>max price</label>
                      <input type='number' min={1000} placeholder={1000} onChange={(e)=>setMax(e.target.value)}/>
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
              <button className='list-search-button' onClick={handleclick}>search</button>
            </div>
            {loading?("loading!!"):
            (<div className='list-result'>
              {data.map((item)=>(
                <SearchResultItem key={item._id} item={item}/>
              ))}
            </div>)}
        </div>
      </div>

    </div>
  )
}

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCar, faHotel, faLocationDot, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { useSearch } from '../../contexts/SearchProvider';


export default function Header({type}) {
    
    const [openDatePanel,setOpenDatePanel] =useState(false)
    const [destination,setDestination] =useState("")
    const [openPersonPanel,setOpenPersonPanel] =useState(false)
    const [date,setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [counter,setCounter] = useState({
        adult: 1,
        child: 0,
        room: 1
      });

    const handleClick =(name,operation)=>{
      setCounter((prev)=>{
        return {
          ...prev,
          [name]: operation==='+' ? counter[name]+1 : counter[name]-1 < 0 ? 0 : counter[name]-1 
        }
      })
    }
    const navigate=useNavigate()
    const {dispatch}=useSearch()
    const handleSearch=()=>{
          dispatch({type: "NEW_SEARCH",payload:{destination,date,counter}})
          navigate("/lists",{state: {destination,date,counter}})
    }

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-items'>
            <div className='item active'>
                <FontAwesomeIcon icon={faHotel} />
                <span>Hotel</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon={faCar} />
                <span>car rentals</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon={faPlane} />
                <span>flights</span>
            </div>
            <div className='item'>
                <FontAwesomeIcon icon={faTaxi} />
                <span>taxi</span>
            </div>
        </div>
        {type !=='checked' && 
        <div className='search'>
            <div className='search-item'>
            <FontAwesomeIcon icon={faLocationDot} />
            <input type='text' placeholder='where are you going?' onChange={(e)=>{setDestination(e.target.value)}}/>            
            </div>
            <div className='search-item'>
            <FontAwesomeIcon icon={faCalendar} />
            <span onClick={()=>{setOpenDatePanel(!openDatePanel)}}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
            {openDatePanel && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='dropdown'
            />}           
            </div>
            <div className='search-item'>
            <FontAwesomeIcon icon={faPerson} />
            <span onClick={()=>{setOpenPersonPanel(!openPersonPanel)}}>{`Adult - ${counter.adult} . Children - ${counter.child} . Room - ${counter.room}`}</span>    
             {openPersonPanel && 
               <div className='dropdown'>
                  <div>
                    Adult
                    <button onClick={()=>{handleClick('adult',"-")}}>-</button>
                    {counter.adult}
                    <button onClick={()=>{handleClick('adult',"+")}}>+</button>
                   </div>
                   <div>
                    Children
                    <button onClick={()=>{handleClick('child',"-")}}>-</button>
                    {counter.child}
                    <button onClick={()=>{handleClick('child',"+")}}>+</button>
                   </div>
                   <div>
                    Room
                    <button onClick={()=>{handleClick('room',"-")}}>-</button>
                    {counter.room}
                    <button onClick={()=>{handleClick('room',"+")}}>+</button>
                   </div>
               </div>
             }                  
            </div>
            <div className='search-item'>
            <button onClick={handleSearch}>search</button>                       
            </div>
        </div>}
      </div>
    </div>
  )
}

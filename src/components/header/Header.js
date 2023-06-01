import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCar, faHotel, faLocationDot, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';

export default function Header() {
    
    const [openDatePanel,setOpenDatePanel] =useState(false)
    const [date,setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

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
        <div className='search'>
            <div className='search-item'>
            <FontAwesomeIcon icon={faLocationDot} />
            <input type='text' placeholder='where are you going?'/>            
            </div>
            <div className='search-item'>
            <FontAwesomeIcon icon={faCalendar} />
            <span onClick={setOpenDatePanel(!openDatePanel)}>{`${date.startDate} to ${date.endDate}`}</span>
            {openDatePanel && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date-range'
            />}           
            </div>
            <div className='search-item'>
            <FontAwesomeIcon icon={faPerson} />
            <span>adult 0</span>                       
            </div>
            <div className='search-item'>
            <button>search</button>                       
            </div>
        </div>
      </div> 
    </div>
  )
}

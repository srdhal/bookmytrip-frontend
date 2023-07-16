import { faCircleXmark, faCross } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useSearch } from '../../contexts/SearchProvider'
import './reservation.css'
import axios from 'axios'

export default function Reservation({id,setPanel}) {

  const {data,loading,error}=useFetch(`http://localhost:8000/hotels/room/${id}`) 
  const [selectedRooms,setSelectedRooms]=useState([])
  const {date}=useSearch()
  
  const setDateRange=(startdate,enddate)=>{
    const start=new Date(startdate.getTime())
    const end=new Date(enddate)

    const list=[]

    while(start<=end){
        list.push(new Date(start).getTime())
        start.setDate(start.getDate()+1)
    }

    return list
  }

  const dateRange=setDateRange(date[0].startDate,date[0].endDate)
  console.log(dateRange)

  const isAvail=(roomNo)=>{
     const isFound=roomNo.unavailableDates.some((date)=>(
        dateRange.includes(new Date(date).getTime())
     ))

     return isFound
  }


  const handleChange=(e)=>{
      const selected=e.target.checked
      const value=e.target.value

      setSelectedRooms(
        selected?
        [...selectedRooms,value]:
        selectedRooms.filter(roomNo=>roomNo!==value)
      )
  }
//   console.log(selectedRooms)

  const handleReserveClick=async ()=>{
      try{
         await Promise.all(selectedRooms.map(roomNo=>{
            const res=axios.put(`http://localhost:8000/rooms/avail/${roomNo}`,{date:dateRange})
            return res.data
         }))
      }catch(err){
         console.log(err)
      }

      setPanel(false)
  } 

  return (
    <div className='reservation'>
      <div className='reservation-container'>
        <FontAwesomeIcon className='reservation-icon' icon={faCircleXmark} onClick={()=>setPanel(false)}/>
        {data.map((room,index)=>{
            return <>
                <div className='reserve-items' key={index}>
                    <div className='reserve-items-info'>
                        <div className='reserve-item-title'>
                           {room.title} 
                        </div>
                        <div className='reserve-item-desc'>
                           {room.desc} 
                        </div>
                        <div className='reserve-item-maxPeople'>
                           Max People: <b>{room.maxPeople}</b> 
                        </div>
                        <div className='reserve-item-price'>
                           price: {room.price} 
                        </div>
                    </div>
                    {room.roomNumbers.map((roomNo,index)=>{
                        return <>
                            <div className='reserve-roomNo' key={index}>
                                <label>{roomNo.number}</label>
                                <input type='checkbox' value={roomNo._id} onChange={handleChange} disabled={isAvail(roomNo)}/>
                            </div>
                        </>
                    })}
                </div>
            </>
        })}
        <button onClick={handleReserveClick} className='reserve-btn'>reserve</button> 
      </div>
    </div>
  )
}

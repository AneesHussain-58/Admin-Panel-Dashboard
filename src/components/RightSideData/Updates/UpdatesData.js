import React from 'react'
import {UpdateData} from '../../DataAPI/CustomAPI'
import './updates.css'

const UpdatesData = () => {
  return (
    <div className='updateData'>
      {UpdateData.map((update, index)=>{
        return (
          <div className='updateProfile'>
            <img src={update.img} alt=""/>
            <div className='spanData'>
              <span>{update.name}</span>
              <span> {update.noti}</span>
              <div className='timeData'>
                <span>{update.time}</span>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UpdatesData

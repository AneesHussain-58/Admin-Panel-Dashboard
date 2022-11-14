import React from 'react'
import { ReviewData } from './ReviewChart/ReviewData'
import UpdatesData from './Updates/UpdatesData'

export const RightSideData = () => {
  return (
    <div className='rightSideData'>
        <div className='innerRight'>
            <h2 style={{marginLeft: "1rem", color: "gray", marginTop: "4rem"}}>Updates</h2>
            <UpdatesData/>
            <h2 style={{marginLeft: "1rem", color: "gray", marginTop: "1rem"}}>Clients Reviews</h2>
            <ReviewData/>
        </div>
    </div>
  )
}

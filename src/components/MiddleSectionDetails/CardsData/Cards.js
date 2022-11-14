import React from 'react'
import './cards.css'
import {cardsData} from '../../DataAPI/CustomAPI'
import { Card } from '../CardDisplayData/Card'
const Cards = () => {
  return (
    <div className='cards'>
      {cardsData.map((data, index)=>{
        return(
          <div className='cards_data' key={index}>
            <Card
              title={data.title}
              color={data.color}
              png= {data.png}
              barValue={data.barValue}
              value={data.value}
              series={data.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards

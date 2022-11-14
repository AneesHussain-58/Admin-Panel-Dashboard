import React from 'react'
import Cards from './CardsData/Cards'
import './middleSectionData.css'
import TableDetail from '../MaterialUiTable/TableDetail'

export const MiddleSectionData = () => {
  return (
    <div className='middleSectionData'>
      <h2 style={{marginTop: "4rem", color: "gray"}}>Dashboard</h2>
      <Cards/>
      <h5 style={{marginTop: "2rem", fontSize: "1rem",color: "gray"}}>Recent Person Visit</h5>
      <TableDetail/>
    </div>
  )
}

import React, { useState } from 'react'
import './sidebarmanu.css'
import LogoPng from '../../Images/logo.png'
import {ManuItemsSideBar} from '../DataAPI/CustomAPI'

const Sidebarmanu = () => {
  const [activeSelect, setActiceSelect] = useState(0);
  return (
    <div className='sidebarmanue'>
       <div className='iconsData'>
            <img src={LogoPng} alt="Internet Issue"/>
            <span>St<span>or</span>e</span>
       </div>
       <div className='manuItemsData'>
            {ManuItemsSideBar.map((items, index)=>{
                return(
                    <div className={activeSelect===index ? "items active" : "items"} 
                        onClick={()=>setActiceSelect(index)} key={index}>
                        <items.manuIcon/>
                        <span>{items.name}</span>
                    </div>
                )
            })}
       </div>
    </div>
  )
}

export default Sidebarmanu

import React, { useState } from 'react'
import './card.css'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {AnimateSharedLayout, motion} from 'framer-motion'
import Chart from "react-apexcharts";
import {UilTimes} from '@iconscout/react-unicons'


export const Card = (props) => {
    const [ExpandedCardData, setExpandedCardData] = useState(false)
    
  return (
    <AnimateSharedLayout>
        {
            ExpandedCardData?
                <ExpandedCardDataDisplay expandedData={props} setExpandedCardData={()=>setExpandedCardData(false)}/>
                :
                <NormalCardDataDisplay CardData={props} setExpandedCardData={()=>setExpandedCardData(true)}/>
        }
    </AnimateSharedLayout>
  )
}

function NormalCardDataDisplay({CardData, setExpandedCardData}){
    const Png= CardData.png
    return(
        <motion.div className='NormalCardData' 
        layoutId="expandedCard"
            onClick={setExpandedCardData}
            style={{
                background: CardData.color.backGround,
                boxShadow: CardData.color.boxShadow,
            }}>
            <div className='ProgressBarData'>
                <CircularProgressbar
                    value={CardData.barValue}
                    text={`${CardData.barValue}%`}
                    styles={buildStyles({
                        textColor: "white",
                        pathColor: "blue",
                        trailColor: "gold",
                        pathTransition:
                        CardData.value === 39 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                      })}
                />
                <span>{CardData.title}</span>
            </div>
            <div className='iconsData'>
                <Png/>
                <span>{CardData.value}</span>
                <span style={{fontSize: "8px"}}>Two Hours Ago</span>
            </div>
        </motion.div>
    )
}

function ExpandedCardDataDisplay({expandedData, setExpandedCardData}){
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return(
        <motion.div className='chartData'
            style={{
                background: expandedData.color.backGround,
                boxShadow: expandedData.color.boxShadow
            }}
        >
            <div className='iconCancel' style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <UilTimes onClick={setExpandedCardData}/>
            </div>
            <span>{expandedData.title}</span>
            <div className='chart'>
                <Chart series={expandedData.series} type="area" options={data.options}/>
            </div>
            <span>Two days ago</span>
        </motion.div>
    )
}
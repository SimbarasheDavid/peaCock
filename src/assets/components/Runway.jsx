import React from 'react'
import run from '../images/Group 36.png'
import RunwayCard from './RunwayCard'
const Runway = () => {
  return (
    <>
      <div id="runway">
        <div className="img">
            <img src={run} alt="" />
        </div>
        <div className="cards">
            <RunwayCard/>
        </div>
      </div>
    </>
  )
}

export default Runway

import React from 'react'
import cura from '../images/Group 6.png'
import FeatherCard from './FeatherCard'
const Feather = () => {
  return (
    <>
      <div id="together">
        <div className="curator">
            <img src={cura} alt="" />
        </div>
        <div className="crads">
            <FeatherCard/>
        </div>
      </div>
    </>
  )
}

export default Feather

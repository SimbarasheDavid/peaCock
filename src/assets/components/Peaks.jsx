import React from 'react'
import peacks from '../images/2022_01_24_10_46_IMG_8205 5.png'
const Peaks = () => {
  return (
    <>
      <div id="fourpeaks">
        <div className="peacks">
            <img src={peacks} alt="" />
        </div>
        <div className="peacks">
            <img src={peacks} alt="" />
        </div>
        <div className="peacks">
            <img src={peacks} alt="" />
        </div>
        <div className="peacks">
            <img src={peacks} alt="" />
        </div>
      </div>
    </>
  )
}

export default Peaks

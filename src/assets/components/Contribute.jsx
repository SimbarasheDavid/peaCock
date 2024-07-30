import React from 'react'
import contri from '../images/Group 27.png'
import mit from '../images/Group 371.png'
const Contribute = () => {
  return (
    <>
      <div id="better">
        <div className="ideas">
            <div className="cont">
            <img src={contri} alt="" />

            </div>
            <p>Share your ideas on how to better the collective</p>
            <form action="" method="get">
                <textarea name="" id="" placeholder='start typing'></textarea>
            </form>
            <div className="circle">
               <input type="button" value="Submit" />
               <div className="img">
                <img src={mit} alt="" />
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contribute

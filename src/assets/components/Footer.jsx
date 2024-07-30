import React from 'react'
import follo from '../images/Group 10.png'
import lockk from '../images/2022_01_24_10_44_IMG_8204 5.png'
import twitt from '../images/twitter.svg'
import insta from '../images/instagram.svg'
const Footer = () => {
    return (
        <>
            <footer id='lastLst'>
            <div className="flock">
                        <img src={lockk} alt="" />
                    </div>
                <div className="overlay"></div>
                <div className="zig">
                    <img src={follo} alt="" />
                </div>
                <div className="follow">

                    <div className="loco">
                        <h2>Follow Us</h2>
                        <div className="icon">
                            <img src={twitt} alt="" />
                            <img src={twitt} alt="" />
                            <img src={insta} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

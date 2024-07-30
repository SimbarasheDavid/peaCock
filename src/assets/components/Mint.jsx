import React from 'react'
import minn from '../images/Group 11.png'
import minto from '../images/Group 37.png'
const Mint = () => {
    return (
        <>
            <div id="mintt">
                <div className="minn">

                    <img src={minn} alt="" />
                </div>
                <div className="textBox">
                    <div className="quantity">
                        <h1>Quantity</h1>
                        <button>x5</button>
                    </div>
                    <div className="quantity">
                        <h1>Total NFTS</h1>
                        <button>5</button>
                    </div>
                    <div className="quantity">
                        <h1>Total cost</h1>
                        <button>25 $Peacock</button>
                    </div>
                </div>
                <div className="nft">
                    <button>Mint</button>
                    <img src={minto} alt="" />
                </div>
            </div>
        </>
    )
}

export default Mint

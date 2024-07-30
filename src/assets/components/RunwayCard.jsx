import React from 'react'
import data from '../../../data/data'

const RunwayCard = () => {
    return (
        <>
            {data && data.RunwayCard.map(card => {
                return (
                    <div className="RunwayCard">
                        <div className="token">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="moon">
                            <h1>{card.tittle}</h1>
                            <div className="ity">
                            <p>{card.desc}</p>
                            </div>
                            
                            <div className="utility">
                                <div className="lity">
                                    <p>{card.desc1}</p>
                                    <div className="mint">
                                        <img src={card.image1} alt="" />
                                    </div>

                                </div>
                                <div className="govern">
                                    <p>{card.desc2}</p>
                                </div>
                            
                            </div>
                            <div className="mint1">
                                    <p>{card.desc3}</p>
                                    <div className="final">
                                        <img src={card.image2} alt="" />
                                    </div>
                                </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RunwayCard

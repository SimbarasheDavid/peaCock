import React from 'react'
import data from '../../../data/feather'
const FeatherCard = () => {
    return (
        <>
            {data && data.FeatherCard.map(card => {
                return (
                    <div className="feathercard">
                        <div className="doe">

                            <div className="eat">
                                <img src={card.image} alt="" />
                            </div>
                            <h1>{card.tittle}</h1>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FeatherCard

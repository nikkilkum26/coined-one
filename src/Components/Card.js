import React from 'react'
import Chart from './Chart'

const Card = ({dropDown,data}) => {
    return (
        <div style={{height: 260,
            width: 433,backgroundColor:'white',
            }}>
            <Chart dropDown={dropDown} data={data}/>
        </div>
    )
}

export default Card

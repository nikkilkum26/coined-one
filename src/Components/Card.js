import React from 'react'
import Chart from './Chart'

const Card = ({dropDown,data,style}) => {
    return (
        <div style={{height: style.height,
            width: style.width,backgroundColor:'white',
            }}>
            <Chart dropDown={dropDown} data={data} />
        </div>
    )
}

export default Card

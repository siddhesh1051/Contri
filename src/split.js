import React from 'react'
import './css/split.css'

const split = ({splitTitle,splitAmount}) => {
  return (
    <div style={{backgroundColor:'black'}}>
      <div className='splitBox'>
        <div className='splitTitle'>
                <h3>{splitTitle}</h3>
        </div>
        {/* <div className='splitDescription'>
                <p>Split Description</p>
        </div> */}
        <div className='splitAmount'>
                <h1>{splitAmount+"/-"}</h1>
        </div>
        <button className='splitPay'>Pay</button>
      </div>
    </div>
  )
}

export default split

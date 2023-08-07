import React from 'react'

const BalanceDisplay = (props) => {
  return (
    <div className='balancedisplaycontainer'>
      <h4>YOUR BALANCE</h4>
      <p>${props.totalbalance}</p>
    </div>
  )
}

export default BalanceDisplay

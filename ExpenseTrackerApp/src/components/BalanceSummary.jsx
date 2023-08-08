import React from 'react'

const BalanceSummary = ({incomeamount , expenseamount}) => {
  return (
    <div className='balancesummarycontainer'>
      <div className='balancesummaryincome'>
        <h4>INCOME</h4>
        <p>${incomeamount}</p>
      </div>
      <div className='vl'></div>
      <div className='balancesummaryexpense'>
        <h4>EXPENSE</h4>
        <p>${expenseamount}</p>
      </div>
    </div>
  )
}

export default BalanceSummary

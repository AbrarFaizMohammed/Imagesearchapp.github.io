import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TransactionDetails({transactionName, amount,transaction,deletetran}) {
  return (
    <div className='transactiondetailscontainer'>
      <FontAwesomeIcon className={`${amount <0?'deletebutton':'deletebutton deletebuttongreen'}`} icon={faTrashCan} onClick={()=>deletetran(transaction)} />
     <div className='transactioninfo' onMouseMove=''> 
        <p className='p1'>{transactionName}</p>
        <p className='p2'>{amount >=0?'+':''}{amount}</p>
     </div>
     <div className={`${amount >= 0 ?'transactioninfocolorgreen':'transactioninfocolorred'}`}></div>
    </div>
  )
}

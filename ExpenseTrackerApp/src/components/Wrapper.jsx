import React, {useState} from 'react'
import BalanceDisplay from './BalanceDisplay'
import BalanceSummary from './BalanceSummary'
import TransactionDetails from './TransactionDetails'
import {v4 as uuidv4} from 'uuid'
import NewTransaction from './NewTransaction'
uuidv4()

const Wrapper = () => {

    const [transinfos , settransinfo] = useState([])

    var val = parseFloat(0.0);
    var income = parseFloat(0.0);
    var expense =parseFloat(0.0);

    transinfos.map((tran)=>(       
        val+=parseFloat(tran.transAmt)
    ));
    
    transinfos.map((tran)=>(       
        tran.transAmt >=0 ? (income+=parseFloat(tran.transAmt)) : (expense-=parseFloat(tran.transAmt))
    ));

    const addtransaction = (name,cost) =>{
        settransinfo([...transinfos,{id:uuidv4(), transName:name, transAmt:cost}])
    }

    const deletetransaction = tranid => {
        settransinfo(transinfos.filter(t=>t.id!=tranid))
    }

  return (
    <div>
      <div>
        <div className="mainContainer">
          <h1 className="headding">Expense Tracker</h1>
          <BalanceDisplay totalbalance={val} />
          <BalanceSummary incomeamount={income} expenseamount={expense}/>
          <h4 className='historytag'>HISTORY</h4>
         <div className='historycontainer'>
         {transinfos.map((trandata,index)=>(<TransactionDetails key={index} transactionName={trandata.transName} amount= {trandata.transAmt} transactionType={trandata.transType} transaction={trandata.id} deletetran={deletetransaction}/>))}
         </div>
          <h4 className='newtransactiontag'>ADD NEW TRANSACTION</h4>
          <NewTransaction addnewtransactiondetails={addtransaction}/>
        </div>
      </div>
    </div>
  )
}

export default Wrapper

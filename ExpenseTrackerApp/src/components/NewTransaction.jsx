import React, {useState} from 'react'

export default function NewTransaction({addnewtransactiondetails}) {

    const [transname, settransname] = useState("");
    const [transamount, settransamount] = useState("");

       
    const display=(e)=>{
        e.preventDefault();
        addnewtransactiondetails(transname,transamount);

        settransname("");
        settransamount("");
    }

  return (
    <div className='newtransactioncontainer'> 
       <form onSubmit={display}>
        <h4>TEXT</h4>
        <input className='transactionName' value={transname} type="text" placeholder='Enter text...' onChange={e=>{settransname(e.target.value)}} required/>
        <h4>AMOUNT</h4>
        <h5>(negative-expense,positive-income)</h5>
        <input className='transactionAmount' value={transamount} type="text" placeholder='Enter amount...' pattern='[+\-\0-9.]{0,9}'  onChange={e=>{settransamount(e.target.value)}} required/><br />
        <button type='Submit'>Add transaction</button>
       </form>
    </div>
  )
}

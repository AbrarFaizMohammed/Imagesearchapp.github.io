import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'

import React from 'react'
const Todo = ({task, togglecomplete, deletevalue,editvalue}) => {

  
  return (
    <div className= {`${task.completed ? 'Todoitems completed':'Todoitems'}`}>
      <p onClick={()=>togglecomplete(task.id)} className={`${task.completed?'displayCheckTrue':''}`} >{task.task}</p>
      <div>
      <FontAwesomeIcon className='Todoitems-icons editIcon' icon={faPenToSquare} onClick={()=>editvalue(task.id)}/>
      <FontAwesomeIcon className='Todoitems-icons trashIcon' icon={faTrashCan} onClick={()=>deletevalue(task.id)}/>
      </div>
    </div>
  )  


 
}

export default Todo

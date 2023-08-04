import React , {useState}from 'react'
import TodoForm from './TodoForm'
import EditToForm from './EditToForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
uuidv4()


const TodoWrapper = (props) => {

  const [values, setValue] = useState([])

  const addValue = value => {

    setValue([...values, {id:uuidv4(), task:value, completed:false, isEdited:false} ])
  }

  const togglecomplete = id =>{
    setValue(values.map(value=>value.id === id ? {...value, completed: !value.completed}:value))
  }

  const deletevalue = id =>{
    setValue(values.filter(value=> value.id!=id))
  }

  const editvalue= id =>{
    setValue(values.map(value=>value.id === id ? {...value, isEdited: !value.isEdited}: value))
  }

  const editTask=(task, id)=>{
      setValue(values.map(value=>value.id===id?{...value,task,isEdited: !value.isEdited}:value))
  }

  return (
    <div>
      <TodoForm addValue={addValue} inputclassName="inputtextfield" placeholder="what is the task today?" buttonclassName="button" buttonText="AddTask" />
      {values.map((value, index)=>(
        value.isEdited ? (<EditToForm editvalue={editTask} inputclassName="inputtextfieldupdate" placeholder="update Task" buttonclassName="buttonUpdate" buttonText="update Task" task={value}/>) :(
         <Todo  task={value} key={index} togglecomplete={togglecomplete} deletevalue={deletevalue} editvalue={editvalue}/>)
        ))} 
     
    </div>
  )
}

export default TodoWrapper

import React, {useState} from 'react'

 const TodoForm = (props) => {

    const [textValue, settextValue] = useState("");

    const handelsubmit = (e)=>{
        e.preventDefault();
        props.addValue(textValue);

        settextValue("");
    }

    return(
        
         <form  className='input_div' onSubmit={handelsubmit}>
         <input className={props.inputclassName} value={textValue} type="text" placeholder={props.placeholder} onChange={e=>{settextValue(e.target.value)}}/>
          <button className={props.buttonclassName} type='Submit' onClick={props.ButtonAction} >{props.buttonText}</button>
         </form>
       
   );
}

export default TodoForm

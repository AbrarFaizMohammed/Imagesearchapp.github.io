import React, {useState} from 'react'

 const EditToForm = (props) => {

    const [textValue, settextValue] = useState(props.task.task );

    const handelsubmit = (e)=>{
        e.preventDefault();
        props.editvalue(textValue, props.task.id);

        settextValue("");
    }

    return(
        
         <form  className='input_div' onSubmit={handelsubmit}>
         <input className={props.inputclassName} value={textValue} type="text" placeholder={props.placeholder} onChange={e=>{settextValue(e.target.value)}}/>
          <button className={props.buttonclassName} type='Submit' onClick={props.ButtonAction} >{props.buttonText}</button>
         </form>
       
   );
}

export default EditToForm

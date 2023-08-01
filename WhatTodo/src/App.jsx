import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './style.css'
import TodoWrapper from './components/TodoWrapper';


const Headding = (props)=> {return(<h1 className={props.className}>{props.text}</h1>);};

const ButtonAction = (props)=>{
  return(
    console.log('Hello Abrar Faiz How are you?')
  );
}


export default function App() {
  return(
    <>
      <div className='maincontainer'>
        <Headding className="title"   text="Get Things Done!" />
        <TodoWrapper ButtonAction = {ButtonAction} />
        
      </div>
    </>
  );
}


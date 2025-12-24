import { useState } from "react";
import "./Head.css";
export const Head = () => {
    const [uniqueId,setUniqueId] = useState(0)
    // const [fruits,setFruits] =useState(['apple','banana'])
    const [text,setText] = useState("")

       const [todos,setTodos] = useState([
    
       ])

    const addTask = ()=> {
        if(text.trim()=== "") return;
        setUniqueId(uniqueId+1);

         const newTask = {
        id : uniqueId,
        task: text,
        completed:false,
    }
    setTodos([...todos,newTask])
    setText("")

    }
    const deleteTask = (idToDelete)=> {
const newTodos = todos.filter((item,index)=> item.id !== idToDelete )
setTodos(newTodos)
    }



  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h2>
            To-do List img <img src="./icon.png" />
          </h2>
          <div className="row">
            <input type="text" id="input-box" placeholder="Add your text"  value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={addTask} className="button">Add</button>
          </div>
          <ul id="list-container">
            {/* <li className="checked">Task 1</li> */}
            {/* <li>Task 2</li>
            <li>Task 3</li> */}
            {todos.map((item,index)=>(

      <div key={index} style={{display:"flex" , gap: "4px"}}>
          <li >{item.task}</li>
        <button onClick={()=>deleteTask(item.id)} >x</button>
        </div>

            ))}
           
          </ul>
        </div>
      </div>
    </>
  );
};

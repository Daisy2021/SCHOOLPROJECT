import './App.css';
import {useState} from 'react';

function App() {
   const [newTask , setNewTask] = useState("");
   const [todoList , setTodoList] = useState([]);
  
  const addTask = (event) =>{
    setNewTask(event.target.value);
  }
  const addList = () =>{
    const task = {
      id: todoList.length === 0 ? 1 :  todoList[todoList.length - 1].id +1,
      taskName:newTask
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) =>{
        const newTodoList = todoList.filter((task) =>{
        return ( task.id !== id );
     } );
        setTodoList(newTodoList);
  }

  return (
    <div className="App">
    <div className="addTask">
      <input type="text" onChange={addTask}></input>
      <button onClick={addList}>Add Task</button>
    </div>
    <div className="list">
      {todoList.map((task)=>{
         return <div><h1>{task.taskName}</h1> 
         <button onClick={()=> deleteTask(task.id)}>X</button>
         </div>
     })}
     
   
     
    </div>
    </div>
  );
}

export default App;

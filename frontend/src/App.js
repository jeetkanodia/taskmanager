import { useEffect, useState } from "react";
import Task from "./components/Task";
import { addTask, getAllTask } from "./utils/HandleApi";

function App() {

  const [task, setTask] = useState([])
  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")

  useEffect(()=> {
    getAllTask(setTask)
  } ,[])
   


  return (
    <div className="App">
      <div className="container">
        <h1>Task Manager</h1>
        <div className="top">
          <input type="text" placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <input type="text" placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          
          <div className="add" onClick={()=>addTask(title,description,setTitle,setDescription,setTask)}>Add Task</div>
        </div>

        <div className="list"> 

        {Array.isArray(task)
        ? task.map((item) => <Task
          key={item._id} 
          title={item.title}
          description={item.description}
          />)
          : null}

        </div>
      </div>
    </div>
  );
}

export default App;

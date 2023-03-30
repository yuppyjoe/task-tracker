import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from "react"

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

   const [tasks, setTasks] = useState([
      {
         id: 1,
         text: "Doctors Appointment",
         day: "April 5th 3pm",
         reminder: true
      }, {
         id: 2,
         text: "Meeting at school",
         day: "April 11th 8am",
         reminder: true
      }, {
         id: 3,
         text: "Shopping",
         day: "April 3rdh 11am",
         reminder: false
      },
   ])

   //Add Task

   const addTask = (task) => {
  
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) +1 ;
    const newTask ={ id, ...task};
    setTasks([...tasks, newTask])
  }
  

   // delete task


   const deleteTask = (id) => {

      setTasks(tasks.filter((task) => task.id !== id));
   }


   // togle reminder

   const toggleReminder = (id) => {
      
    setTasks(tasks.map((task) => task.id === id ? 
      { ...task, reminder :
      !task.reminder } : task
    ))
   }

   return (
      <div className="container">
         <h1>
            <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
         </h1>
         <div> {
            tasks.length > 0 ? (
               <Tasks tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}/>
            ) : ("No Task For Now")
         } </div>
         <div>
          {showAddTask && <AddTask onAdd = {addTask} />}
         </div>
      </div>
   );
}

export default App;

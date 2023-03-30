import { useState } from 'react';

const AddTask = ({ onAdd }) => {

   const [text, setText] = useState("");
   const [day, setDay] = useState("");
   const [reminder, setReminder] = useState(false);

   const onSubmit = (e) => {
      e.preventDefault();

      if (!text) {
         alert("please add a task");
         return
      }

      onAdd({ text, day, reminder });

      setText("");
      setDay("");
      setReminder(false);
   }

   return (


      <form onSubmit={onSubmit} className="add-form">
         <div className="form-control">
            <label htmlFor="task">
               Task
            </label>
            <input type="text" name="task" placeholder="Add Task" id="" value={text} onChange={(e) =>
               setText(e.target.value)
            } />
         </div>
         {/* <div className="form-control">
         <label htmlFor="id">
            ID
         </label>
         <input type="number" name="id" placeholder="Enter Id" id="" value={id} onChange = { (e) => 
            setId(e.target.value)
         }  />
      </div> */}
         <div className="form-control">
            <label htmlFor="day">
               Day & Time
            </label>
            <input type="text" name="day" placeholder="Enter a day & time" id="" value={day} onChange={(e) =>
               setDay(e.target.value)
            } />
         </div>
         <div className="form-control form-control-check">
            <label htmlFor="reminder">
               Reminder
            </label>
            <input type="checkbox" checked={reminder} name="reminder" placeholder="Set Reminder" id="" value={reminder} onChange={(e) =>
               setReminder(e.currentTarget.checked)
            } />
         </div>

         <input className="btn btn-block" type="submit" value="Save Task" />
      </form>
   )
}

export default AddTask
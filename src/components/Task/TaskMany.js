/* eslint-disable react/prop-types */
import React, {useState} from "react";
import TaskSingle from "./TaskSingle";

function TaskMany(){
    // const [tasks, setTasks] = useState({
    //     id: "",
    //     task: "",
    //     dateAndTime: ""
    // });
    const [tasks, setTasks] = useState([
        {id: "1", task: "Buy milk", dateAndTime: "Nov 22 3 pm"}, 
        {id: "2", task: "Watch movie", dateAndTime: "Nov 22 5 pm"},
        {id: "3", task: "Write journal", dateAndTime: "Nov 22 9 pm"}
    ]);
    const handleCheck = (id) => {
        setTasks(tasks.filter((task) => { 
            return task.id !== id
        }))
    }
    return <div>
        {tasks.map((task) => {
            return <TaskSingle 
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        dateAndTime={task.dateAndTime}
                        onHandleCheck={handleCheck}
                        />
        })}
    </div>
}

export default TaskMany;
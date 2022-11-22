/* eslint-disable react/prop-types */
import React from "react";
import TaskSingle from "./TaskSingle";

function TaskMany(props){
    // const [tasks, setTasks] = useState({
    //     id: "",
    //     task: "",
    //     dateAndTime: ""
    // });
    

    const handleCheck = (id) => {
        props.setTasks(props.tasks.filter((task) => { 
            return task.id !== id
        }))
    }
    return <div>
        {props.tasks.map((task) => {
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
import React, {useState} from "react";
import CreateTask from "./Task/CreateTask";
import TaskProperties from "./TaskProperties/TaskProperties";
import Collection from "./Collection/Collection";
import { Grid } from "@mui/material";
import TaskMany from "./Task/TaskMany";

function Home () {
    const [showTaskProp, setShowTaskProp] = useState(false);
    const [tasks, setTasks] = useState([]);

    return <div>
        <h1>Everything will be here</h1>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Collection />
            </Grid>
            <Grid item xs={8}>
                <TaskMany tasks={tasks} setTasks={setTasks}/>
                { showTaskProp ? <TaskProperties tasks={tasks} sendTasks={setTasks} /> : null }
                <CreateTask onClickHandle={() => {setShowTaskProp(!showTaskProp)}} />
            </Grid>
        </Grid>
    </div>
}

export default Home;
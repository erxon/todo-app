import React, {useState} from "react";
import { Grid } from "@mui/material";
import CreateTask from "./Task/CreateTask";
import TaskProperties from "./TaskProperties/TaskProperties";
import Collection from "./Collection/Collection";
import TaskMany from "./Task/TaskMany";
import Schedule from "./Schedule";
//material ui
import {Box} from "@mui/material";
import theme from "./Theme";
import {ThemeProvider} from "@mui/material";


function Home () {
    const [showTaskProp, setShowTaskProp] = useState(false);
    const [tasks, setTasks] = useState([]);

    return <div>
        <ThemeProvider theme={theme}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <h1>To-do list</h1>
                        <h2>Collections</h2>
                        <Collection />
                        { showTaskProp ? <TaskProperties show={setShowTaskProp} tasks={tasks} sendTasks={setTasks} /> : null }
                        <CreateTask onClickHandle={() => {setShowTaskProp(!showTaskProp)}} />
                        <h2>List</h2>
                        <TaskMany tasks={tasks} setTasks={setTasks}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Schedule />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
        
                
    </div>
}

export default Home;
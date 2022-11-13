import React from "react";
import CreateTask from "./Task/CreateTask";
import TaskProperties from "./TaskProperties/TaskProperties";
function Home () {

    return <div>
        <h1>Everything will be here</h1>
        <TaskProperties />
        <CreateTask />
    </div>
}

export default Home;
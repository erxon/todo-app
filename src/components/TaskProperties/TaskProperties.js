import React from "react";
import { TextField } from "@mui/material";

function TaskProperties() {
    return <div>
        <div>
            <TextField 
                sx={{width: "25ch"}}
                id="standard-basic" 
                label="Task" 
                variant="standard"
                margin="dense"
                multiline
                 />
            <br />
            <TextField 
                sx={{width: "25ch"}}
                id="standard-basic" 
                label="Description" 
                variant="standard" 
                margin="dense"
                multiline />
            <br />
            <TextField 
                sx={{width: "25ch"}}
                id="standard-basic" 
                label="Collection" 
                variant="standard"
                margin="dense"
                multiline />
            <br />

        </div>
    </div>
}

export default TaskProperties;
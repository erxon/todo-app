import React, {useState} from "react";
import dayjs from 'dayjs';
import { TextField } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import {Button} from "@mui/material";
import styles from "../../styles/styles.forms";


function TaskProperties() {
    //Create object to store properties of a task
    const [task, setTask] = useState({
        task: "",
        description: "",
        collection: "",
        dateAndTime: dayjs('2014-08-18T21:11:54')
    });
    //Create array to store collection of tasks after submition
    let tasks = [];
    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        setTask((prevValue) => {
            return {...prevValue, [name]: value}
        });
    }
    const handleSubmit = () => {
        tasks.push(task);
        console.log(tasks);
    }
    //Pass the array to TaskMany component
    

    //For Date and Time picker
    // const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleDateAndTime = (newValue) => {
        setTask((prevValue) => {
            return {...prevValue, dateAndTime: newValue}
        });
    };

    return <div style={{
        boxShadow: "0px 5px 10px #b5b5b5",
        width: "20rem",
        display: "flex",
        justifyContent: "center"

        }}>
        <div style={{padding: "30px"}}>
            {/*Task properties fields*/}
            <TextField 
                sx={{width: "25ch"}}
                id="standard-basic" 
                label="Task"
                variant="standard"
                margin="dense"
                name="task" 
                onChange={handleFieldChange}
                value={task.task}
                multiline />
            <br />
            <TextField 
                sx={{width: "25ch"}}
                id="standard-basic" 
                label="Description" 
                variant="standard" 
                margin="dense"
                name="description" 
                onChange={handleFieldChange}
                value={task.description}
                multiline />
            <br />
            <TextField 
                sx={{width: "25ch"}}
                id="standard-basic" 
                label="Collection" 
                variant="standard"
                margin="dense"
                name="collection" 
                onChange={handleFieldChange}
                value={task.collection}
                multiline />
            <br />
            {/*Date and Time picker*/}
            <div style={{marginTop: "20px", marginBottom: "20px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date&Time picker"
                        value={task.dateAndTime}
                        onChange={handleDateAndTime}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            {/*Buttons - Add and Cancel*/}
            <Button style={styles.buttonStyle} onClick={handleSubmit}>ADD</Button>
            <Button sx={{ml: 1}} style={styles.cancelButton}>CANCEL</Button>
        </div>
    </div>
}

export default TaskProperties;
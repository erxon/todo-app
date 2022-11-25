/* eslint-disable react/prop-types */
import React, {useState} from "react";
import dayjs from 'dayjs';
import { TextField } from "@mui/material";
import { DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import updateLocale from "dayjs/plugin/updateLocale";
import {Button} from "@mui/material";
import styles from "../../styles/styles.forms";


function TaskProperties(props) {
    //Create object to store properties of a task
    // For Date and Time picker
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
        monthsShort: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
    });
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
    const [task, setTask] = useState({
        id: "",
        task: "",
        description: "",
        collection: "",
        dateAndTime: value,
        endTime: value
    });
    let temporaryId = props.tasks.length;

    //Handle changes in fields
    const handleFieldChange = (event) => {
        const {name, value} = event.target;

        setTask((prevValue) => {
            return {...prevValue, id: `${temporaryId}`, [name]: value}
        });
    }

    //Handle submission
    const handleSubmit = () => {
        //Pass the array to TaskMany component
        props.sendTasks((prevValues) => {return [...prevValues, task]});
        props.show(false);
    }
    
    
    //Change handlers for date and time
    const handleDateAndTime = (newValue) => {
        setValue(newValue);
    };
    const handleEndTime = (newValue) => {
        setTask((prevValue) => {
            return {...prevValue, endTime: newValue}
        });
    };

    return <div style={{
        backgroundColor: "#fff",
        boxShadow: "0px 5px 10px #dfdfdf",
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
                        value={value}
                        onChange={handleDateAndTime}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <div style={{marginTop: "10px"}}>
                        <TimePicker
                            label="End Time"
                            value={task.endTime}
                            onChange={handleEndTime}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </LocalizationProvider>
            </div>
            {/*Buttons - Add and Cancel*/}
            <Button style={styles.buttonStyle} onClick={handleSubmit}>ADD</Button>
            <Button sx={{ml: 1}} style={styles.cancelButton}>CANCEL</Button>
        </div>
    </div>
}

export default TaskProperties;
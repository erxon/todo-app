import React from "react";
import dayjs from 'dayjs';
import { TextField } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import styles from "../../styles/styles.forms";

function TaskProperties() {
    //For Date and Time picker
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
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
                multiline />
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
            {/*Date and Time picker*/}
            <div style={{marginTop: "20px", marginBottom: "20px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date&Time picker"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            {/*Buttons - Add and Cancel*/}
            <button style={styles.buttonStyle}>ADD</button>
            <button style={styles.cancelButton}>CANCEL</button>
        </div>
    </div>
}

export default TaskProperties;
/* eslint-disable react/prop-types */

import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';

function TaskSingle(props){
    const [checked, setChecked] = useState(false);

    const styles = {
        borderBottom: "1px solid #b5b5b5",
        width: "50%",
        display: "flex",
    }
    
    return <div style={styles}>
            {/* <div onMouseOver={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
                <input className="checkbox" 
                    onClick={() => {props.onHandleCheck(props.id)}} 
                    style={{marginRight: "10px"}} 
                    type="checkbox"
                    {show && checked}
                    />
            </div> */}
            <Checkbox 
                checked={checked} 
                onMouseOver={() => {setChecked(true)}}
                onMouseLeave={() => {setChecked(false)}}
                onClick={() => {props.onHandleCheck(props.id)}}
                sx={{mt: 1, mb: 1}}
                />
            <p>{props.task}</p>
    </div>
}

export default TaskSingle;
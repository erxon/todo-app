import React from "react";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function CreateTask(props) {
    return <div>
        <Button 
            sx={{color: "#16C0D8", mt: 2}} 
            size="small" startIcon={<AddIcon />}
            // eslint-disable-next-line react/prop-types
            onClick={props.onClickHandle}> Add Task </Button>
    </div>
}

export default CreateTask;
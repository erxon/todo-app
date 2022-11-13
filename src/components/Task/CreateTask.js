import React from "react";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles from "../../styles/styles.forms";

function CreateTask() {
    return <div>
        <Button sx={styles.accentColor} size="small" startIcon={<AddIcon />}> Add Task </Button>
    </div>
}

export default CreateTask;
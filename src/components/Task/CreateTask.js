import React from "react";
import {Button, ThemeProvider} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import theme from "../Theme";
function CreateTask(props) {
    return <div>
        <ThemeProvider theme={theme}>
            <Button 
                sx={{mt: 2}} 
                variant="contained"
                size="small" startIcon={<AddIcon />}
                // eslint-disable-next-line react/prop-types
                onClick={props.onClickHandle}> Add Task 
            </Button>
        </ThemeProvider>
        
    </div>
}

export default CreateTask;
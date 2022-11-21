import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import {IconButton} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import { VisibilityOff } from "@mui/icons-material";
import {Button} from "@mui/material";
import styles from "../styles/styles.forms";

const Login = () => {

    const [isVisible, setVisibilityTo] = useState(false); 

    return <div>
        <div style={styles.box}>
            <h1>Ericson To-do App</h1>
            <h2>Login</h2>
            <TextField 
                label="Username" 
                variant="filled"
                size="small"
                margin="dense"
                type="text"
                sx={{ m: 1, width: '25ch' }}
            />
            <br />
            <TextField 
                label="Password" 
                type={isVisible ? "text" : "password"}
                variant="filled"
                size="small"
                margin="dense"
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                            setVisibilityTo(!isVisible)
                        }}
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        {isVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }}
            />
            <p style={styles.smallParagraph}>forgot password? <a href="#" style={styles.link}>Click here</a></p>
            <p>Do not have an account yet? <a href="/register" style={styles.link}>Signup</a></p>

            <Button style={styles.buttonStyle}>Login</Button>
        </div>
    </div>
}

export default Login;
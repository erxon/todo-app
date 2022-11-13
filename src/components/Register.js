import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import {IconButton} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import { VisibilityOff } from "@mui/icons-material";
import styles from "../styles/styles.forms";
import {Button} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Register = () => {

    const [isVisible, setVisibilityTo] = useState(false); 

    return <div>
        <div style={styles.box}>
            <h1>Ericson To-do App</h1>
            <h2>Signup</h2>
            <TextField 
                label="Email" 
                variant="filled"
                size="small"
                margin="dense"
                type="email"
                sx={{ m: 1, width: '25ch' }}
            />
            <br />
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
            <br />
            <button style={styles.buttonStyle}>Signup</button>
            <br />
            <Link style={{textDecoration: "none"}} to="/">
                <Button sx={{m: 1, color: "#1E1E1E"}} size="small" startIcon={<ArrowBack />}>
                    Back
                </Button>
            </Link>
        </div>
    </div>
}

export default Register;
import React, {useState} from "react";
import { Grid } from "@mui/material";
import CreateTask from "./Task/CreateTask";
import TaskProperties from "./TaskProperties/TaskProperties";
import Collection from "./Collection/Collection";
import TaskMany from "./Task/TaskMany";
import Schedule from "./Schedule";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//Icons
import ListIcon from '@mui/icons-material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Home () {
    const [showTaskProp, setShowTaskProp] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return <div>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<ListIcon />} iconPosition="start" label="Todo list" {...a11yProps(0)} />
                    <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Calendar" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Todo list
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Collection />
                    </Grid>
                    <Grid item xs={8}>
                        <TaskMany tasks={tasks} setTasks={setTasks}/>
                        { showTaskProp ? <TaskProperties show={setShowTaskProp} tasks={tasks} sendTasks={setTasks} /> : null }
                        <CreateTask onClickHandle={() => {setShowTaskProp(!showTaskProp)}} />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Schedule />
            </TabPanel>
        </Box>
    </div>
}

export default Home;
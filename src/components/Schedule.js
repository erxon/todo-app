import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const appointments = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const Schedule = () => {
  return <Paper>
    <Scheduler
      data={appointments}
    >
      <ViewState
        defaultCurrentDate={currentDate}
        defaultCurrentViewName="Week"
      />
      <DayView
        startDayHour={9}
        endDayHour={14}
      />
      <WeekView 
        startDayHour={10}
        endDayHour={19}
      />
      <MonthView 
        startDayHour={10}
        endDayHour={19}
      />
      <Toolbar />
      <ViewSwitcher />
      <Appointments />
    </Scheduler>
  </Paper>
};

export default Schedule;

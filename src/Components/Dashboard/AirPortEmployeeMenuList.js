import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GridOnIcon from '@mui/icons-material/GridOn';

export default function AirportEmployeeListItems({selected, setSelected}) {
  return (
    <React.Fragment>
      <ListItemButton onClick={(e) => setSelected("dashboard")} selected={selected == "dashboard"}>
        <ListItemIcon>
          <DashboardIcon sx={{ color: 'primary.main' }}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={(e) => setSelected("arrivals")} selected={selected == "arrival"}>
        <ListItemIcon>
          <FlightLandOutlinedIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
        <ListItemText primary="Arrivals" />
      </ListItemButton>
      <ListItemButton onClick={(e) => setSelected("departures")} selected={selected == "departures"}>
        <ListItemIcon>
          <FlightTakeoffOutlinedIcon sx={{ color: 'red' }}/>
        </ListItemIcon>
        <ListItemText primary="Departures" />
      </ListItemButton>
      {/* <ListItemButton onClick={(e) => setSelected("login")} selected={selected == "login"}>
        <ListItemIcon>
          <LoginIcon sx={{ color: 'purple' }} />
        </ListItemIcon>
        <ListItemText primary="Log In" />
      </ListItemButton> */}
      <ListItemButton onClick={(e) => setSelected("gateManagement")} selected={selected == "gateManagement"}>
        <ListItemIcon>
          <GridOnIcon sx={{ color: 'purple' }} />
        </ListItemIcon>
        <ListItemText primary="Gate Management" />
      </ListItemButton>
      <ListItemButton onClick={(e) => setSelected("aboutus")} selected={selected == "aboutus"}>
        <ListItemIcon>
          <CelebrationOutlinedIcon sx={{ color: 'orange' }} />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
    </React.Fragment>
  );
}


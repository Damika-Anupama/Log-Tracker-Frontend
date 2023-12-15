import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import GradingIcon from '@mui/icons-material/Grading';

export const MainListItems: React.FC = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <ListItemButton
        component={Link}
        to="/"
        selected={location.pathname === '/'}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Save User" />
      </ListItemButton>

      <ListItemButton
        component={Link}
        to="/view"
        selected={location.pathname === '/view'}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="View Users" />
      </ListItemButton>

      <ListItemButton
        component={Link}
        to="/logs"
        selected={location.pathname === '/logs'}
      >
        <ListItemIcon>
          <GradingIcon />
        </ListItemIcon>
        <ListItemText primary="Get Logs" />
      </ListItemButton>
    </React.Fragment>
  );
};

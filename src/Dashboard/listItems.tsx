import ForwardIcon from '@mui/icons-material/Forward';
import SaveIcon from '@mui/icons-material/Save';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
          <SaveIcon />
        </ListItemIcon>
        <ListItemText primary="Save Logs" />
      </ListItemButton>

      <ListItemButton
        component={Link}
        to="/logs"
        selected={location.pathname === '/logs'}
      >
        <ListItemIcon>
          <ForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Get Logs" />
      </ListItemButton>
    </React.Fragment>
  );
};

import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import PeopleIcon from '@mui/icons-material/People';

import TableChartIcon from '@mui/icons-material/TableChart';
import { CssBaseline } from '@mui/material';

export const mainListItems = (
  <div>
    <CssBaseline />
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>
    <ListItem button component="a" href="/create">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create Client" />
    </ListItem>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Davi Barbosa</ListSubheader>
//   </div>
// );

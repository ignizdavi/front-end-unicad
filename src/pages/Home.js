import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../components/Menu';
import CreateClient from '../pages/client/dashboard/createClient';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  Grid,
  Container,
  IconButton,
  Divider,
  Typography,
  List,
  Toolbar,
  Box,
} from '@mui/material';

const Home = () => {
  const mdTheme = createTheme();

  const drawerWidth = 240;

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  return (
    <div></div>
    // <ThemeProvider theme={mdTheme}>
    //   <Box sx={{ display: 'flex' }}>
    //     <CssBaseline />
    //     <AppBar position="absolute" open={open}>
    //       <Toolbar
    //         sx={{
    //           pr: '24px', // keep right padding when drawer closed
    //         }}
    //       >
    //         <IconButton
    //           edge="start"
    //           color="inherit"
    //           aria-label="open drawer"
    //           onClick={toggleDrawer}
    //           sx={{
    //             marginRight: '36px',
    //             ...(open && { display: 'none' }),
    //           }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography
    //           component="h1"
    //           variant="h6"
    //           color="black"
    //           noWrap
    //           sx={{ flexGrow: 1 }}
    //         >
    //           Cadastro de usuário
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>
    //     <Drawer variant="permanent" open={open}>
    //       <Toolbar
    //         sx={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           justifyContent: 'flex-end',
    //           px: [1],
    //         }}
    //       >
    //         <IconButton onClick={toggleDrawer}>
    //           <ChevronLeftIcon />
    //         </IconButton>
    //       </Toolbar>
    //       <Divider />
    //       <List>{mainListItems}</List>
    //       <Divider />
    //       {/* <List>{secondaryListItems}</List> */}
    //     </Drawer>
    //     <Box
    //       component="main"
    //       sx={{
    //         backgroundColor: (theme) =>
    //           theme.palette.mode === 'light'
    //             ? theme.palette.grey[100]
    //             : theme.palette.grey[900],
    //         flexGrow: 1,
    //         height: '100vh',
    //         overflow: 'auto',
    //       }}
    //     >
    //       <Toolbar />
    //       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    //         <Grid container spacing={3}>
    //           <Grid item sm={12}>
    //             <CreateClient />
    //             {/* <Paper
    //               sx={{
    //                 padding: 2,
    //                 display: 'flex',
    //                 flexDirection: 'column',
    //                 overflow: 'auto',
    //                 alignItems: 'center',
    //               }}
    //             >
    //               <h2>Cadastro de Pedido</h2>
    //               <Grid container spacing={3}>
    //                 <Grid item xs={12} sm={3}>
    //                   <TextField
    //                     required
    //                     id="cpf"
    //                     name="cpf"
    //                     label="CPF"
    //                     fullWidth
    //                     autoComplete="cpf"
    //                     variant="standard"
    //                     value={cpf}
    //                     onChange={(e) => setCpf(e.target.value)}
    //                   ></TextField>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12}>
    //                   <TextField
    //                     required
    //                     id="fullName"
    //                     name="fullName"
    //                     label="Full Name"
    //                     fullWidth
    //                     autoComplete="Full Name"
    //                     variant="standard"
    //                     value={fullName}
    //                     onChange={(e) => setFullName(e.target.value)}
    //                   />
    //                 </Grid>
    //                 <Grid item xs={12} sm={6}>
    //                   <TextField
    //                     required
    //                     id="addressesStart"
    //                     name="addressesStart"
    //                     label="Addresses Start"
    //                     fullWidth
    //                     autoComplete="given-name"
    //                     variant="standard"
    //                     value={addressesStart}
    //                     onChange={(e) => setAddressesStart(e.target.value)}
    //                   />
    //                 </Grid>
    //                 <Grid item xs={12} sm={3}>
    //                   <FormControl fullWidth>
    //                     <InputLabel id="Número de Partida">
    //                       Número de Partida
    //                     </InputLabel>
    //                     <Select
    //                       labelId="Número de Paartida"
    //                       id="numAddressesStart"
    //                       value={numAddressesStart}
    //                       // label="Age"
    //                       variant="standard"
    //                       onChange={(e) => setNumStart(e.target.value)}
    //                     >
    //                       <MenuItem value={1}>Aguardando</MenuItem>
    //                       <MenuItem value={2}>Enviado</MenuItem>
    //                       <MenuItem value={3}>Rota</MenuItem>
    //                     </Select>
    //                   </FormControl>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6}>
    //                   <TextField
    //                     required
    //                     id="addressesFinal"
    //                     name="addressesFinal"
    //                     label="Addresses Final"
    //                     fullWidth
    //                     autoComplete="addressesFinal"
    //                     variant="standard"
    //                     value={addressesFinal}
    //                     onChange={(e) => setAddressesFinal(e.target.value)}
    //                   />
    //                 </Grid>
    //                 <Grid item xs={12} sm={3}>
    //                   <FormControl fullWidth>
    //                     <InputLabel id="Número de Entrega">
    //                       Número de Entrega
    //                     </InputLabel>
    //                     <Select
    //                       labelId="Número de Entrega"
    //                       id="numAddressesFinal"
    //                       value={numAddressesFinal}
    //                       label="Age"
    //                       variant="standard"
    //                       onChange={(e) => setNumFinal(e.target.value)}
    //                     >
    //                       <MenuItem value={1}>Emissão de NTF</MenuItem>
    //                       <MenuItem value={2}>Em Rota</MenuItem>
    //                       <MenuItem value={3}>Entregue</MenuItem>
    //                     </Select>
    //                   </FormControl>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12}>
    //                   <Button variant="contained" onClick={handleSubmit}>
    //                     Cadastrar
    //                   </Button>
    //                 </Grid>
    //               </Grid>
    //             </Paper> */}
    //           </Grid>
    //         </Grid>
    //         {/* <Copyright sx={{ pt: 4 }} /> */}
    //       </Container>
    //     </Box>
    //   </Box>
    // </ThemeProvider>
  );
};

export default Home;

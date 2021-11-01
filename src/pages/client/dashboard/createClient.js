import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../../../components/Menu';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import api from '../../../services/api';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ignizdavi">
        My Git
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

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

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [cpf, setCpf] = useState('');
  const [fullName, setFullName] = useState('');
  const [addressesStart, setAddressesStart] = useState('');
  const [numAddressesStart, setNumStart] = useState('');
  const [addressesFinal, setAddressesFinal] = useState('');
  const [numAddressesFinal, setNumFinal] = useState('');

  async function handleSubmit() {
    const data = {
      cpf: cpf,
      fullName: fullName,
      addressesStart: addressesStart,
      numAddressesStart: numAddressesStart,
      addressesFinal: addressesFinal,
      numAddressesFinal: numAddressesFinal,
    };

    if (
      cpf !== '' &&
      fullName !== '' &&
      addressesStart !== '' &&
      numAddressesStart !== '' &&
      addressesFinal !== '' &&
      numAddressesFinal !== ''
    ) {
      const response = await api.post(
        'https://unicad-back-ts.herokuapp.com/v1/clients',
        data,
      );

      if (response.status === 201) {
        window.location.href = '/';
      } else {
        alert('Erro ao cadastrar o usuario');
      }
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
              alignItems: 'center',
            }}
          >
            <h2>Cadastro de Pedido</h2>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="cpf"
                  name="cpf"
                  label="CPF"
                  fullWidth
                  autoComplete="cpf"
                  variant="standard"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  fullWidth
                  autoComplete="Full Name"
                  variant="standard"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="addressesStart"
                  name="addressesStart"
                  label="Addresses Start"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={addressesStart}
                  onChange={(e) => setAddressesStart(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="numAddressesStart"
                    name="numAddressesStart"
                    label="Nº de Partida"
                    fullWidth
                    autoComplete="numAddressesStart"
                    variant="standard"
                    value={numAddressesStart}
                    onChange={(e) => setNumStart(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="addressesFinal"
                  name="addressesFinal"
                  label="Addresses Final"
                  fullWidth
                  autoComplete="addressesFinal"
                  variant="standard"
                  value={addressesFinal}
                  onChange={(e) => setAddressesFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="numAddressesFinal"
                    name="numAddressesFinal"
                    label="Nº de Entrega"
                    fullWidth
                    autoComplete="numAddressesFinal"
                    variant="standard"
                    value={numAddressesFinal}
                    onChange={(e) => setNumFinal(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" onClick={handleSubmit}>
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

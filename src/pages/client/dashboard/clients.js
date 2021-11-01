import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../../../components/Menu';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import api from '../../../services/api';
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

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [client, setClient] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('/v1/clients');
      setClient(response.data);
    }
    loadClients();
  }, []);

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
            <h2>Listagem de Entregas</h2>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">CPF</TableCell>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Saida</TableCell>
                        <TableCell align="center">Nº</TableCell>
                        <TableCell align="center">Entrega</TableCell>
                        <TableCell align="center">Nº</TableCell>
                        <TableCell align="center">Data</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {client.map((row) => (
                        <TableRow
                          key={row.cpf}
                          sx={{
                            '&:last-child td, &:last-child th': {
                              border: 0,
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.cpf}
                          </TableCell>
                          <TableCell>{row.fullName}</TableCell>
                          <TableCell>{row.addressesStart}</TableCell>
                          <TableCell align="center">
                            {row.numAddressesStart}
                          </TableCell>
                          <TableCell>{row.addressesFinal}</TableCell>
                          <TableCell align="center">
                            {row.numAddressesFinal}
                          </TableCell>
                          <TableCell align="center">
                            {new Date(row.createdAt).toLocaleString('pt-br')}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

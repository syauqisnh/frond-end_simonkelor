import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import welcomeimg from 'assets/images/logo.svg';
import MenuItem from '@mui/material/MenuItem';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" src={"https://mui.com/"}>
        PBL
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#311E69',
      darker: '#fff',
    },
    neutral: {
      main: '#8473ED',
      contrastText: '#fff',
    },
  },
});

const unit = [
  {
    value: 'SA',
    label: 'Super Admin',
  },
  {
    value: 'AD',
    label: 'Admin Dispatcher',
  },
  {
    value: 'AP',
    label: 'Admin Pembangkit',
  },
  {
    value: 'PG',
    label: 'Pegawai',
  },
];

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className="grid">
          <img alt='' src={welcomeimg} className="gambar"/>
        <Grid item className="paper" mt={12} md={3}>
        <Paper
            elevation={10}
            sx={{
                  height: 500,
                  width: 400,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
          <Box
            paddingTop={2}
            sx={{
              my: 3,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* <div className="img-class">
              <img src={logo} id="img-id" alt="" width={200} />
            </div> */}
            {/* <Avatar variant="rounded" sx={{ m: 1, bgcolor: '#311E69',  width: 56, height: 56,}}>
            <img src={logo} id="img-id" alt="" width={30} />
            </Avatar> */}
            <Typography variant="h4" style={{fontWeight: 'bold', color: '#311E69'}}>
              Sign Up Here!
            </Typography>
            {/* <h6 style={{color: '#525252'}}>Please enter your username and password</h6> */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="dense"
                required
                fullWidth
                name="name"
                label="Full Name"
                type="name"
                id="name"
                autoFocus
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                name="nip"
                label="NIP"
                type="nip"
                id="nip"
                autoComplete="nip"
                size="small"
              />
              <TextField
                margin="dense"
                id="outlined-select-currency"
                select
                fullWidth
                required
                size="small"
                label="Instansi/Unit"
                defaultValue="PG"
                // helperText="Please select your role"
              >
                {unit.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="dense"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="phone"
                id="phone"
                autoComplete="phone"
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="confirm-current-password"
                size="small"
              />
              <Button
                href="/"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                Color="primary"
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item sx={{ mb: 1}}> 
                  <Link href="Signin" variant="body2" style={{color: '#525252'}}>
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 1 }} />
            </Box>
           </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
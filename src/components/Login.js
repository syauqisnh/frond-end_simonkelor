import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import welcomeimg from './Signin/login.svg';
// import logo from './Signin/logo.png';

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
    <ThemeProvider theme={theme} >
      <Grid container component="main" className="grid">
          <img alt='' 
          className="gambar"
        //   style={{height:600, width:600,}}
        //   sx={{
        //   height: 233,
        //   width: 350,
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
        // }}
          />
        <Grid  className="paper" item mt={3} md={3}>
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
            paddingTop={5}
            sx={{
              my: 10,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* <div className="img-class">
              <img src={logo} id="img-id" alt="" width={200} />
            </div> */}
            <Avatar variant="rounded" sx={{ m: 1, bgcolor: '#311E69',  width: 56, height: 56,}}>
            <img id="img-id" alt="" width={30} />
            </Avatar>
            <Typography variant="h4" style={{fontWeight: 'bold', color: '#311E69'}}>
              Welcome Back!
            </Typography>
            <h6 style={{color: '#525252'}}>Please enter your username and password</h6>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                style={{color: '#525252'}}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                margin="left"
              />
              <Button
                href="/"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                Color="primary"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item sx={{ mb: 1}}> 
                  <Link href="page3" variant="body2" style={{color: '#525252'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 2 }} />
            </Box>
           </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
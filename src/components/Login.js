import React, {useState} from "react";
import axios from "axios";

import {
  CCardBody,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CInputGroup,
} from '@coreui/react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import welcomeimg from '../assets/images/login.svg';
import logo from '../assets/images/logo.png';

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

  const [validation, setValidation] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     localStorage.setItem("token", response.data.token);
  //     window.location.href = "/"; 
  //   } catch (error) {
  //     setValidation(error.response.data);
  //   }

  //   // const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   email: data.get('email'),
  //   //   password: data.get('password'),
  //   // });

  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      window.location.href = "/"; 
    } catch (error) {
      setValidation(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" className="grid">
          <img alt='' src={welcomeimg}
          className="gambar"
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
            <img src={logo} id="img-id" alt="" width={30} />
            </Avatar>
            <Typography variant="h4" style={{fontWeight: 'bold', color: '#311E69'}}>
              Welcome Back!
            </Typography>
            <h6 style={{color: '#525252'}}>Please enter your username and password</h6>
                      {
                        validation.message && (
                          <div className='alert alert-danger'>
                            {validation.message}
                          </div>
                        )
                      }
                      
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <CInputGroup className="mb-3">

                      <CFormInput 
                      margin="normal"
                      required
                      fullWidth
                      type='email' 
                      name='email' 
                      placeholder="Email" 
                      autoComplete="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} />

                    </CInputGroup>

                    <CInputGroup className="mb-4">

                      <CFormInput 
                      margin="normal"
                      required
                      fullWidth
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      />

                    </CInputGroup>

                    <CRow>
                      <CCol xs={12}>
              <Button
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
                  <Link href="Signup" variant="body2" style={{color: '#525252'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 2 }} />
                      </CCol>
                      <CCol xs={6} className="text-right">
                      </CCol>
                    </CRow>
                  </CForm>
                  
                </CCardBody>
            {/* <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
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
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
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
                  <Link href="Signup" variant="body2" style={{color: '#525252'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 2 }} />
            </Box> */}
           </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
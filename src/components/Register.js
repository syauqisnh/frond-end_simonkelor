import axios from "axios";
import React, {useState} from "react";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import welcomeimg from '../assets/images/register.svg';
import {
  CCardBody,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

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

export default function SignUpSide() {
  const [validation, setValidation] = useState([]);

  const [nama_users, setNama] = useState("");
  const [nips, setNip] = useState("");
  const [instansis, setInstansi] = useState("");
  const [roles, setRole] = useState("");
  const [emails, setEmail] = useState("");
  const [passwords, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  

  const save_user = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/api/user_registrasi`,
        {
          nama_user: nama_users,
          nip: nips,
          instansi: instansis,
          role: roles,
          email: emails,
          password: passwords,
          password_confirmation: password_confirmation,
        });
        alert("registrasi berhasil")
        setNama("");
        setNip("");
        setInstansi("");
        setRole("");
        setEmail("");
        setPassword("");
        setPassword_confirmation("");
        
        window.location.href = "/signin"; 

    } catch (error) {
      setValidation(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className="grid">
          <img alt='' src={welcomeimg} className="gambar"/>
        <Grid item className="paper" mt={9} md={3}>
        <Paper
            elevation={10}
            sx={{
                  height: 550,
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
              <CCardBody className="p-4">

                <CForm onSubmit={save_user}>

                    {
                      validation.message && (
                        <div className='alert alert-danger'>
                          {validation.message}
                        </div>
                      )
                    }

                  <CInputGroup className="mb-3">
                    <CFormInput 
                      margin="dense"
                      required
                      type='text' 
                      name='nama_user' 
                      placeholder="Nama Lengkap" 
                      autoComplete="Nama Lengkap" 
                      onChange={(e) => setNama(e.target.value)}
                      value={nama_users} 
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput 
                      margin="dense"
                      required
                      type='text' 
                      name='nip' 
                      placeholder="NIP" 
                      autoComplete="NIP"
                      onChange={(e) => setNip(e.target.value)} 
                      value={nips} 
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      margin="dense"
                      required
                     type='text' 
                     name='instansi' 
                     placeholder="Instansi" 
                     autoComplete="instansi"
                     onChange={(e) => setInstansi(e.target.value)}
                     value={instansis} 
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormSelect
                      margin="dense"
                      required
                        type="text"
                        name='role'
                        onChange={(e) => setRole(e.target.value)}
                        value={roles} 
                    >
                        <option className='text-secondary'>--- pilih Role ---</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin Dispacher" >Admin Dispacher</option>
                        <option value="Admin Pembangkit">Admin Pembangkit</option>
                        <option value="Pegawai">Pegawai</option>
                    </CFormSelect>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      margin="dense"
                      required
                      type='email'
                      name='email'
                      placeholder="Email" 
                      autoComplete="email" 
                      onChange={(e) => setEmail(e.target.value)}
                      value={emails} 
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CFormInput
                      margin="dense"
                      required
                      type="password"
                      name='password'
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={passwords} 
                    />

                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      margin="dense"
                      required
                      type="password"
                      name='password_confirmation'
                      placeholder="Konfirmasi password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword_confirmation(e.target.value)}
                      value={password_confirmation} 
                    />

                  </CInputGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                color="primary"
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
                </CForm>

              </CCardBody>
            {/* <h6 style={{color: '#525252'}}>Please enter your username and password</h6> */}

            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                required
                fullWidth
                name="unit"
                label="Institution/Unit"
                type="unit"
                id="unit"
                autoComplete="unit"
                size="small"
              />
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
                id="outlined-select-currency"
                select
                fullWidth
                required
                size="small"
                label="Role"
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
                href="/Signin"
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
            </Box> */}
           </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
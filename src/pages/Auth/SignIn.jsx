import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as SmsIcon } from '../../assets/sms.svg';
import { ReactComponent as LockIcon } from '../../assets/lock.svg';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import { createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#AC26FF', // Change the color here
          '&.Mui-checked': {
            color: '#AC26FF', // Change the color when checked
          },
        },
      },
    },
  },
});

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
      } else {
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div
      className="signin-wrapper"
      style={{
        backgroundColor: '#BD8ADE',
        height: '100%',
        paddingTop: '9%',
        paddingBottom: '258px',
      }}
    >
      <Container
        className="container"
        component="main"
        maxWidth="xs"
        style={{
          width: '28%',
          padding: 0,
          borderRadius: '20px',
          backgroundColor: 'white',
          paddingTop: '55px',
        }}
      >
        <Box
          sx={{
            marginTop: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="signin_title"
            style={{
              color: '#4F4545',
              marginBottom: '15px',
              font: 'Noto Sans JP',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            <LoginIcon fontSize="small" /> ログイン
          </div>
          <Box component="form" noValidate sx={{ mt: 2 }}>
            <Box
              sx={{ display: 'flex', alignItems: 'flex-end' }}
              style={{ marginBottom: '20px' }}
            >
              <SmsIcon style={{ marginRight: '10px' }} />
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                label="メールアドレス"
                variant="standard"
                value={email}
                onChange={handleEmail}
              />
            </Box>
            <Box
              sx={{ display: 'flex', alignItems: 'flex-end' }}
              style={{ marginBottom: '20px' }}
            >
              <LockIcon style={{ marginRight: '10px' }} />
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                label="パスワード"
                variant="standard"
                value={password}
                onChange={handlePassword}
              />
            </Box>
            <Button
              className="login_btn"
              fullWidth
              variant="contained"
              sx={{
                mt: 7,
                mb: 6,
                backgroundImage: 'linear-gradient(to right, #DC52FF, #887EFF)',
                color: 'white', // Change the background color here
                borderRadius: '12px',
                height: '42px',
              }}
              onClick={handleSignIn}
            >
              ログイン
            </Button>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ marginBottom: '25px' }}>
                <Link
                  href="#"
                  variant="body2"
                  style={{
                    color: '#60828C',
                    fontStyle: 'Inter',
                    fontSize: '16px',
                    textDecoration: 'none',
                  }}
                >
                  パスワードを忘れた
                </Link>
              </div>
              <div>
                アカウントをお持ちでない方は
                <RouterLink
                  to="/signup"
                  href="#"
                  variant="body2"
                  style={{
                    color: '#AD26FF',
                    fontStyle: 'Inter',
                    fontSize: '16px',
                    textDecoration: 'none',
                  }}
                >
                  こちら
                </RouterLink>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

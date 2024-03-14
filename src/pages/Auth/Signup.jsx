import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';

import { createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

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

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div
      className="signup-wrapper"
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
          padding: 0,
          borderRadius: '20px',
          backgroundColor: 'white',
          paddingTop: '55px',
        }}
      >
        <Box
          sx={{
            marginTop: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="signup_title"
            style={{
              color: '#4F4545',
              marginBottom: '15px',
              font: 'Noto Sans JP',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            <LoginIcon fontSize="small" /> 新規会員登録
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div
              style={{
                borderRadius: '20px',
                width: '75%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingTop: '35px',
                paddingBottom: '15px',
                color: '#575757',
              }}
            >
              <div>
                男性の方はこちら
                <RouterLink>
                  <Button
                    className="login_btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      mb: 3,
                      backgroundImage:
                        'linear-gradient(to right, #DC52FF, #887EFF)',
                      color: 'white', // Change the background color here
                      borderRadius: '12px',
                      height: '42px',
                      fontWeight: 'bold',
                    }}
                  >
                    無料会員登録
                  </Button>
                </RouterLink>
              </div>
              <div>
                女性の方はこちら
                <RouterLink to="/signup_women">
                  <Button
                    className="login_btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      mb: 8,
                      backgroundImage:
                        'linear-gradient(to right, #DC52FF, #887EFF)',
                      color: 'white', // Change the background color here
                      borderRadius: '12px',
                      height: '42px',
                      fontWeight: 'bold',
                    }}
                  >
                    無料会員登録
                  </Button>
                </RouterLink>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '3px' }}>
                  登録すると
                  <Link
                    href="#"
                    variant="body2"
                    style={{
                      color: '#AD26FF',
                      fontStyle: 'Inter',
                      fontSize: '16px',
                      textDecoration: 'none',
                    }}
                  >
                    利用規約とプライバシーポリシー
                  </Link>
                  に 同意したものとみなされます。
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: 'center',
                paddingBottom: '32px',
              }}
            >
              <div>
                ログインページは
                <RouterLink
                  to="/login"
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

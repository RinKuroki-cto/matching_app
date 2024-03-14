import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as LoginIcon } from '../../assets/login_icon.svg';
import LockClockIcon from '@mui/icons-material/LockClock';
import { Link as RouterLink } from 'react-router-dom';

const InputCode = () => {
  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    event.target.value = value;
  };
  return (
    <div
      className="code-wrapper"
      style={{
        backgroundColor: '#BD8ADE',
        height: '100%',
        paddingTop: '9%',
        paddingBottom: '134px',
      }}
    >
      <Container
        className="container"
        component="main"
        maxWidth="md"
        style={{
          padding: 0,
          borderRadius: '20px',
          backgroundColor: 'white',
          width: '26%',
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
            <LoginIcon fontSize="small" /> 認証コード
          </div>
          <Box component="form" noValidate sx={{ mt: 0, width: '85%' }}>
            <div
              style={{
                borderRadius: '20px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              <div
                style={{
                  font: 'Noto Sans JP',
                  color: '#7C7C7C',
                  fontSize: '15px',
                  textAlign: 'center',
                  width: '80%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontWeight: 'bold',
                }}
              >
                メールアドレスに届いた
                <br />
                確認コードを入力してください
              </div>
              <div
                style={{
                  backgroundColor: '#D2B1E7',
                  display: 'flex',
                  marginTop: '15px',
                  height: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '12px',
                  }}
                >
                  メールアドレス(非公開)
                </div>
                <div
                  style={{
                    color: '#FC5C6C',
                    backgroundColor: 'white',
                    fontSize: '12px',
                    marginLeft: '10px',
                    padding: '1.5px',
                    paddingLeft: '3px',
                    paddingRight: '3px',
                    borderRadius: '2px',
                  }}
                >
                  - 必須 -
                </div>
              </div>
              <Box
                sx={{ display: 'flex', alignItems: 'flex-end' }}
                style={{
                  marginTop: '45px',
                  width: '80%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <LockClockIcon
                  style={{ color: '#BD8ADE', marginRight: '10px' }}
                />
                <TextField
                  fullWidth
                  id="number"
                  name="code"
                  type="text"
                  label="認証コード"
                  variant="standard"
                  onChange={handleInputChange}
                />
              </Box>
              <div
                style={{
                  marginTop: '80px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    color: '#646464',
                    fontWeight: 'bold',
                    font: 'Noto Sans JP',
                    fontSize: '14px',
                  }}
                >
                  ＜ドメイン指定受信されている方へ＞
                </div>
                <div
                  style={{
                    width: '72%',
                    color: '#818181',
                    fontSize: '12px',
                    font: 'Noto Sans JP',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '10px',
                  }}
                >
                  ドメイン指定受信,
                  受信拒否などを設定している場合は、メールが受信できるように設定を変更してください。
                </div>
              </div>
              <RouterLink to="#">
                <Button
                  className="login_btn"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 5,
                    mb: 7,
                    backgroundImage:
                      'linear-gradient(to right, #DC52FF, #887EFF)',
                    color: 'white', // Change the background color here
                    borderRadius: '12px',
                    height: '42px',
                    fontWeight: 'bold',
                  }}
                >
                  認証する
                </Button>
              </RouterLink>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default InputCode;

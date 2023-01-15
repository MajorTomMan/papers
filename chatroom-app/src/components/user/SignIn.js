import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { queryByName } from '../../Tools/Connect';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="Http://info.cern.ch/">
        FirstWebSite
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const submit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (inputIsEmpty(data)) {
      alert("用户名或者密码不能为空,请重新输入")
    }
    else {
      let res = await queryByName(
        {
          name: data.get('name'),
          password: data.get('password'),
          lastname: data.get('lastname'),
          firstname: data.get('firstname')
        }
      )
      console.log("后端返回:", res)
      if (userisExist(res)) {
        if (!isCorrect(data.get('name'), res)) {
          alert(`请输入正确的账号或密码!`)
          return
        }
        alert(`欢迎回来! ${data.get('name')} ^.^`)
        window.location.href = "/room?name=" + encodeURI(data.get('name')) + "";
      }
      else {
        alert("您尚未注册.马上跳转注册页面^.^")
        window.location.href = "/signup"
      }
    }
  };
  const inputIsEmpty = (data) => {
    if (data.get('name') === '' || data.get('password') === '') {
      return true
    }
    return false
  }
  const userisExist = ({ data }) => {
    if (data === "") return false; //检验空字符串
    if (data === "null") return false; //检验字符串类型的null
    if (data === "undefined") return false; //检验字符串类型的 undefined
    if (!data && data !== 0 && data !== "") return false; //检验 undefined 和 null           
    if (Array.prototype.isPrototypeOf(data) && data.length === 0) return false; //检验空数组
    if (Object.prototype.isPrototypeOf(data) && Object.keys(data).length === 0) return false;  //检验空对象
    return true;
  }
  const isCorrect = (Name, Password, { data }) => {
    let { name, password } = data
    if ( Password === password && Name === name) {
      return true
    }
    return false
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登录
          </Typography>
          <Box component="form" action="/room" method="post" onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="用户名"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Password"
              name="password"
              label="密码"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="记住我"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              登录
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  忘记密码?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"还没账号?注册一个!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

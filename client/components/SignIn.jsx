import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const mapStateToProps = (state) => ({
  cardList: state.cardList,
  newSearch: state.newSearch,
  newLogin: state.newLogin,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (user) => dispatch(actions.signupUser(user)),
  updateNewSearch: (search) => dispatch(actions.addSearch(search)),
  updateNewLogin: (login) => dispatch(actions.newLogin(login)),
});

// function Copyright() {
//   return (
//     <Typography variant='body2' color='textSecondary' align='center'>
//       {'Copyright © '}
//       <Link color='inherit' href='https://material-ui.com/'>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const classes = useStyles();

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //   <Container component='main' maxWidth='xs'>
      //     <CssBaseline />
      //     <div className={classes.paper}>
      //       <Avatar className={classes.avatar}>
      //         <LockOutlinedIcon />
      //       </Avatar>
      //       <Typography component='h1' variant='h5'>
      //         Sign in
      //       </Typography>
      //       <form className={classes.form} noValidate>
      <div>
        <input
          style={{ marginTop: '10rem' }}
          value={this.props.emptyLogin}
          onChange={(e) => {
            this.props.updateNewLogin(e.target.value);
          }}
        />
        <button onClick={() => this.props.handleClick(this.props.newLogin)}>
          {' '}
          Sign Up
        </button>
      </div>
      // variant='outlined'
      // margin='normal'
      // required
      // fullWidth
      // id='email'
      // label='Email Address'
      // name='email'
      // autoComplete='email'
      // autoFocus
      //       <TextField
      //         variant='outlined'
      //         margin='normal'
      //         required
      //         fullWidth
      //         name='password'
      //         label='Password'
      //         type='password'
      //         id='password'
      //         autoComplete='current-password'
      //       />
      //       <FormControlLabel
      //         control={<Checkbox value='remember' color='primary' />}
      //         label='Remember me'
      //       />
      //       <Button
      //         type='submit'
      //         fullWidth
      //         variant='contained'
      //         color='primary'
      //         className={classes.submit}
      //       >
      //         Sign In
      //       </Button>
      //       <Grid container>
      //         <Grid item xs>
      //           <Link href='#' variant='body2'>
      //             Forgot password?
      //           </Link>
      //         </Grid>
      //         <Grid item>
      //           <Link href='#' variant='body2'>
      //             {"Don't have an account? Sign Up"}
      //           </Link>
      //         </Grid>
      //       </Grid>
      //     </form>
      //   </div>
      //   <Box mt={8}>
      //     <Copyright />
      //   </Box>
      // </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

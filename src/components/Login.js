import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@material-ui/core";


function Login({handleChange}) {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };

  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          style={{marginTop: '50px'}}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checked" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography style={{marginTop: '20px'}}>
          <Link to="/">Forgot password ?</Link>
        </Typography>
        <Typography style={{marginTop: '30px'}}>
          Dont have an account ?<Link to="#" onClick={()=>handleChange("event", 1)}>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;

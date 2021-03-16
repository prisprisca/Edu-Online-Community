import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

function Signup({handleChange}) {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };

  const btnStyle = { margin: "8px 0" };
  const [value, setValue] = React.useState();
   const handleChang = (event) => {
    setValue(event.target.value);
  };
  return (
      
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Sign Up</h2>
          <p>Please fill this form to create an account !</p>
        </Grid>
        <TextField label="Name" placeholder="Enter name" style={{marginTop: '20px'}} fullWidth required />
        <TextField
          label="Email"
          placeholder="Enter email"
          type="email"
          fullWidth
          required
        />
         <FormControl component="fieldset" style={{marginTop: '30px'}}>
          <FormLabel component="legend" >Sign Up as</FormLabel>
          <RadioGroup row aria-label="specification" name="specify" value={value} onChange={handleChang}>
        <FormControlLabel value="student" control={<Radio />} label="Student" />
        <FormControlLabel value="facilitator" control={<Radio />} label="Facilitator" />
        
       
      </RadioGroup>
        </FormControl>
        <TextField
          label="Password"
          placeholder="Enter password"
          type="pasword"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm password"
          type="password"
          fullWidth
          required
        />
       

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          SIGN UP
        </Button>

        <Typography style={{marginTop: '10px'}}>
          Already have an account ?<Link to="#" onClick={()=>handleChange("event", 0)}>Login</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Signup;

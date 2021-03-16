import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/Login';
import Signup from '../components/Signup'

function SignInOut() {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      
      const paperStyle={width: 340, margin:'20px auto'}
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
            
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
       
    return (
        <>
        <div
        className="nav-header"
        style={{ background: "#4A47A3", height: "50px", marginTop: "0" }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <p
            style={{
              textAlign: "center",
              padding: "0.5rem",
              fontFamily: "Times New Roman",
              fontSize: "2rem",
            }}
          >
            EDU Community
          </p>
        </Link>
      </div>
        <Paper elevation={20} style={paperStyle}> 
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab label="sign In" />
   
    <Tab label="sign Up" />
  </Tabs>
  <TabPanel value={value} index={0}>
  <Login handleChange={handleChange}/>
</TabPanel>
<TabPanel value={value} index={1}>
  <Signup handleChange={handleChange}/>
</TabPanel>
</Paper>

</>
    )
}

export default SignInOut

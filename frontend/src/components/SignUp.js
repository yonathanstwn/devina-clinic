import "./SignUp.css";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import Dashboard from "./Dashboard";
function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return (
        <div className="SignUp">
                <Dashboard/>
                <h1 className="Signup">Sign Up!</h1>
                <TextField
                className='textField'
                id='filled-basic'
                label="Enter Your Name"
                color="secondary"/>

                <br/><br/>

                <TextField className='textField' id='filled-basic'
                
                label="Enter Your Age"
                    type='number' color="secondary"/>
                    <br/><br/>

                    <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="gender"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl> <br/>

                <TextField
                className='textField'
                    id="outlined-password-input"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >{showPassword ? "✔️" : "❌"}
                            </IconButton>
                        </InputAdornment>
                        )
                    }} color="secondary"/> <br/><br/>
                
                

                <Button className="SubmitButton" 
                        variant="contained" 
                        color="secondary"
                        onClick={() => alert("You clicked submit!")}
                        endIcon={<SendIcon />}
                        >Register!</Button>
      </div>
    ); 
}

export default SignUp;

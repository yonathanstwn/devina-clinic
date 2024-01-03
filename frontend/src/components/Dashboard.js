import "./Dashboard.css";
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Dashboard() {
    return (
        <div className='Dashboard'>
            <img src="https://bit.ly/devinaImage" alt="The Devina aesthetic House Logo" className="imgDevina"/>
                <h1 className='StoreName'>Devina House&trade;</h1>
                <hr/>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Link to="/" className="home-link">Home</Link>
                <Link to="/signup" className="signup-link">Sign Up!</Link>
                </ButtonGroup>
                <TextField 
                id="filled-basic"
                label="Search"
                size="small"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        onClick={() => {alert("You searched!")}}>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
            </div>
    ); 
}

export default Dashboard;
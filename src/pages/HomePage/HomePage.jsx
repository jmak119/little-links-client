import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

import './HomePage.scss';

const Homepage = () => {

    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate(`/students/${event.target.value}`)
    };

    return (
        <section className="home">
            <div className="home__container">
                <h1 className="home__welcome">Welcome back Mr. Jonathan!</h1>
                <p>Please select a student:</p>
            </div>
            <form className="home__student-container">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Student</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(event) => { handleChange(event) }}
                        >
                            <MenuItem value={1}>Emma</MenuItem>
                            <MenuItem value={4}>Athena</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                <Button
                    variant="contained"
                    href="#contained-buttons"
                    disableElevation
                    component={Link}
                    to="/log"
                >
                    Submit
                </Button>
            </form>
        </section>
    )
}

export default Homepage;
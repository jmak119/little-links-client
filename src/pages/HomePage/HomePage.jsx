import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


import './HomePage.scss';
import { apiUrl } from "../../utils/api";
import axios from "axios";

import { useParams } from 'react-router-dom';

const Homepage = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Emma</MenuItem>
                            <MenuItem value={20}>Athena</MenuItem>
                            
                        </Select>
                    </FormControl>
                </Box>
                <Button
                        variant="contained"
                        href="#contained-buttons"
                        disableElevation
                        component={Link}
                        to ="/log"
                        >
                        Submit
                    </Button>
            </form>


        </section>
    )
}

export default Homepage;
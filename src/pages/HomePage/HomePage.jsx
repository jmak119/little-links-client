import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';



import './HomePage.scss';
import { apiUrl } from "../../utils/api";
import axios from "axios";

import { useParams } from 'react-router-dom';

const Homepage = () => {

    // const [studentId, setStudentId] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        // setStudentId(event.target.value);
        navigate(`/students/${event.target.value}`)
        // console.log(studentId)
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
                            // value={studentId}
                            // label="studentId"
                            onChange={(event) => {handleChange(event)}}
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
                        to ="/log"
                        >
                        Submit
                    </Button>
            </form>


        </section>
    )
}

export default Homepage;
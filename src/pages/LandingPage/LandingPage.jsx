import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



import Logo from "../../assets/images/logo.jpg"

import "./LandingPage.scss";

export default function LandingPage() {

    return (
        <section className="landing">
            <div className="landing__body-container">
                <img className="landing__logo" src={Logo} alt="logo" />
                <div className="landing__welcome-container">
                    <h1 className="landing__heading">"Children are not things to be molded, but are people to be unfolded."</h1>
                    <h4 className="landing__author">-Jess Lair</h4>
                </div>
                <div className="landing__about-us">
                    Little Links is a non-profit with the mission to help bridge the communication gap between Registered Early Childhood Educators and their students and families.
                </div>
                <div className='landing__button-container'>
                    <Button
                        variant="contained"
                        href="#contained-buttons"
                        disableElevation
                        component={Link}
                        to ="/login"
                        >
                        Log In
                    </Button>
                    <Button
                        variant="contained"
                        href="#contained-buttons"
                        disableElevation
                        component={Link}
                        to ="/login"
                        >
                        Sign-Up
                    </Button>
                </div>



            </div>


        </section>
    )

}
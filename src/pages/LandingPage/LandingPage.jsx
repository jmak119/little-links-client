import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Testimonials from "../../components/Testimonials/Testimonials";

import Logo from "../../assets/images/logo.png"

import "./LandingPage.scss";

export default function LandingPage() {

    // const theme = createTheme({
    //     palette: {
    //         primary: {
    //             // light: will be calculated from palette.primary.main,
    //             main: '#3CCFC1',
    //             // dark: will be calculated from palette.primary.main,
    //             contrastText: '#FFFFFF'
    //         },
    //         secondary: {
    //             light: '#0066ff',
    //             main: '#0044ff',
    //             // dark: will be calculated from palette.secondary.main,
    //             contrastText: '#ffcc00',
    //         },
    //         // Provide every color token (light, main, dark, and contrastText) when using
    //         // custom colors for props in Material UI's components.
    //         // Then you will be able to use it like this: `<Button color="custom">`
    //         // (For TypeScript, you need to add module augmentation for the `custom` value)
    //         custom: {
    //             light: '#ffa726',
    //             main: '#f57c00',
    //             dark: '#ef6c00',
    //             contrastText: 'rgba(0, 0, 0, 0.87)',
    //         },
    //         // Used by `getContrastText()` to maximize the contrast between
    //         // the background and the text.
    //         contrastThreshold: 3,
    //         // Used by the functions below to shift a color's luminance by approximately
    //         // two indexes within its tonal palette.
    //         // E.g., shift from Red 500 to Red 300 or Red 700.
    //         tonalOffset: 0.2,
    //     },
    // });


    return (
        <section className="landing">
            <div className="landing__body-container">
                <img className="landing__logo" src={Logo} alt="logo" />
                <div className="landing__welcome-container">
                    <h1 className="landing__heading">"Children are not things to be molded, but are people to be unfolded."</h1>
                    <h4 className="landing__author">- Jess Lair</h4>
                    <p className="landing__about-us">
                        Little Links is a non-profit with the mission to help bridge the communication gap between Registered Early Childhood Educators and their students and families.
                    </p>
                    <div className='landing__button-container'>
                        {/* <Button
                            variant="contained"
                            theme={theme}
                            href="#contained-buttons"
                            disableElevation
                            component={Link}
                            to="/login"
                        >
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            theme={theme}
                            href="#contained-buttons"
                            disableElevation
                            component={Link}
                            to="/login"
                        >
                            Sign-Up
                        </Button> */}
                        <Link to="/login" className='landing__button' >
                                Log-In
                        </Link>

                        <Link to="/signup" className='landing__button'>
                            Sign-Up
                        </Link>
                    </div>
                </div>

            </div>
            <div className='landing__video'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/31gZZZ-XG94" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div>
                <Testimonials />
            </div>


        </section>
    )

}
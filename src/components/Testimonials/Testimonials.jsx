import React from "react";
import './Testimonials.scss';
import userAllison from "../../assets/images/testimonial-photo-allison.jpg";
import userJoanna from "../../assets/images/testimonial-photo-joanna.webp"
import userDavid from "../../assets/images/testimonial-photo-david.jpg"

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials__card">
                <div className="testimonials__quote-container">
                    <p>The best thing about using Little Links is the amount of time we saved!</p>
                </div>
                <img className="testimonials__avatar" src={userAllison}></img>
                <div className="testimonials__author-container">
                    <p>Allison Wilcox</p>
                    <p>Little Hands Montessori</p>
                </div>
            </div>

            <div className="testimonials__card">
                <div className="testimonials__quote-container testimonials__">
                    <p>The best thing about using Little Links is the amount of time we saved!</p>
                </div>
                <img className="testimonials__avatar" src={userJoanna}></img>
                <div className="testimonials__author-container testimonials__yellow">
                    <p>Joanna Birch</p>
                    <p>Starlight Kids Academy</p>
                </div>
            </div>

            <div className="testimonials__card">
                <div className="testimonials__quote-container">
                    <p>The best thing about using Little Links is the amount of time we saved!</p>
                </div>
                <img className="testimonials__avatar" src={userDavid}></img>
                <div className="testimonials__author-container testimonials__orange">
                    <p>David Jones</p>
                    <p>Little Sprouts Daycare</p>
                </div>
            </div>
        </section>
        )

}
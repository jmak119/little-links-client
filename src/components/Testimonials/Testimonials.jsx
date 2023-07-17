import React from "react";
import './Testimonials.scss';

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials__card">
                <div className="testimonials__quote-container">
                    <p>The best thing about using Little Links is the amount of time we saved!</p>
                </div>
                <div className="testimonials__author-container">
                    <p>Allison Wilcox</p>
                    <p>Little Hands Montessori</p>
                </div>
            </div>

            <div className="testimonials__card">
                <div className="testimonials__quote-container testimonials__">
                    <p>The best thing about using Little Links is the amount of time we saved!</p>
                </div>
                <div className="testimonials__author-container testimonials__yellow">
                    <p>Allison Wilcox</p>
                    <p>Little Hands Montessori</p>
                </div>
            </div>

            <div className="testimonials__card">
                <div className="testimonials__quote-container">
                    <p>The best thing about using Little Links is the amount of time we saved!</p>
                </div>
                <div className="testimonials__author-container testimonials__orange">
                    <p>Allison Wilcox</p>
                    <p>Little Hands Montessori</p>
                </div>
            </div>
        </section>
        )

}
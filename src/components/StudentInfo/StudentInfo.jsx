import * as React from 'react';
import "./StudentInfo.scss";

export default function StudentInfo({ studentInfo }) {

    if (!studentInfo) {
        return <span>Loading...</span>;
    }

    const todaysDate = new Date(studentInfo.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <>
            <section className='info'>
                <p><span>Name: </span>{`${studentInfo.student_name}`}</p>
                <p><span>Date: </span>{todaysDate}</p>
                <p><span>Teacher: </span>{`${studentInfo.teacher_name}`}</p>
            </section>
        </>
    );
}
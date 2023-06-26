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
                <p className='info__details'><span className='info__title info__title--bold'>Name: </span>{`${studentInfo.student_name}`}</p>
                <p className='info__details'><span className='info__title info__title--bold'>Date: </span>{todaysDate}</p>
                <p className='info__details'><span className='info__title info__title--bold'>Teacher: </span>{`${studentInfo.teacher_name}`}</p>
            </section>
        </>
    );
}
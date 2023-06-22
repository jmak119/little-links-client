import React, { useState, useEffect } from "react";
import MyCalendar from '../../components/Calendar/Calendar';
import DailyLog from '../../components/DailyLog/DailyLog';

import './HomePage.scss';
import { apiUrl } from "../../utils/api";
import axios from "axios";

import { useParams } from 'react-router-dom';

const Homepage = () => {

    const [selectedDate, setSelectedDate] = useState('2023-06-28');

    const [fullList, setFullList] = useState();

    useEffect(() => {
        axios
            .get(`${apiUrl}/dailyLogs/${selectedDate}/4`)
            .then((response) => {
                setFullList(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    if (!fullList) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <div className="home__body">
                <div>
                    <MyCalendar />
                </div>
                <div className="home__log-container">
                    <DailyLog
                        fullList={fullList}
                    />
                </div>
            </div>
        </>
    )
}

export default Homepage;